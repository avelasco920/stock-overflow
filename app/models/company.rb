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
end
