class StockPrice < ApplicationRecord
  validates :company_id, :price, :time, :time_series, presence: true
  validates_uniqueness_of :time, :scope => :company_id
  validate :not_too_far_in_past, on: :create

  belongs_to :company

  enum time_series: {
    intraday: "intraday",
    daily: "daily"
  }

  def not_too_far_in_past
    case self.time_series
    when 'intraday'
      errors.add(:time, 'only cache intraday stock price up to 1 week') if self.time < 1.week.ago
    when 'daily'
      errors.add(:time, 'only cache daily stock prices up to 1 year') if self.time < 1.year.ago
    end
  end

  def self.should_update?
    last_stock_price_pull = self.where(time_series: 'intraday').order(time: :desc).first&.time
    last_trading_hour = TradingHours.last_trading_hour
    last_stock_price_pull < (last_trading_hour - 10.minutes)
  end

  def self.clean_up
    old_stock_prices = self.where('time_series = ? AND time < ? OR time_series = ? AND time <  ?', 'intraday', Time.current - 1.week, 'daily', Time.current - 1.year)
    old_stock_prices.destroy_all
  end
end
