class StockPrice < ApplicationRecord
  validates :company_id, :price, :time, :time_series, presence: true
  validates_uniqueness_of :time, :scope => :company_id

  belongs_to :company

  enum time_series: {
    intraday: "intraday",
    daily: "daily"
  }

  def self.should_update?
    last_stock_price_pull = self.where(time_series: 'intraday').order(time: :desc).first&.time
    last_trading_hour = TradingHours.last_trading_hour
    last_stock_price_pull < (last_trading_hour - 10.minutes)
  end
end
