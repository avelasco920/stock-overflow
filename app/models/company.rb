# == Schema Information
#
# Table name: companies
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  symbol        :string           not null
#  market_price  :float
#  biography     :string
#  ceo           :string
#  founding_year :integer
#  employees     :integer
#  location      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Company < ApplicationRecord
  validates :name, :symbol, presence: true, uniqueness: true
  has_many :trade_events
  has_many :stock_prices

  def market_price
    self.stock_prices.order(time: :desc).first&.price
  end

  def individual_stock_value(num_shares)
    self.market_price * num_shares
  end

  def self.top_five_by_name(query_params)
    param = '%' + query_params.downcase + '%'
    Company.where('lower(name) LIKE ?', param).limit(5)
  end

  def self.top_five_by_symbol(query_params)
    param = '%' + query_params.downcase + '%'
    Company.where('lower(symbol) LIKE ?', param).limit(5)
  end

  def should_update_stock_prices?
    last_stock_price_pull = self.stock_prices.where(time_series: 'intraday').order(time: :desc).first&.time
    last_trading_hour = TradingHours.new.last_trading_hour
    last_stock_price_pull < (last_trading_hour - 10.minutes)
  end

  def update_stock_prices(time_series)
    return if !['intraday', 'daily'].include?(time_series)
    interval = time_series == 'intraday' ? '5min' : 'daily'
    response = RestClient::Request.execute(
      method: :get,
      url: "https://www.alphavantage.co/query?function=TIME_SERIES_#{time_series.upcase}&symbol=#{self.symbol}&interval=#{interval}&outputsize=full&apikey=#{ENV['ALPHAVANTAGE_API_KEY']}",
    )

    JSON.parse(response)["Time Series (#{interval.capitalize})"].each do |time, price_data|
      adjusted_time = Time.find_zone('EST').parse(time)
      self.stock_prices.create(time: adjusted_time, price: price_data['4. close'], time_series: time_series)
    end
  end

  def clear_old_stock_prices
    old_stock_prices = self.stock_prices.where('time_series = ? AND time < ?', 'intraday', Time.current - 1.week)
    old_stock_prices.destroy_all
  end
end
