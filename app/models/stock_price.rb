class StockPrice < ApplicationRecord
  validates :company_id, :price, :time, :time_series, presence: true
  validates_uniqueness_of :time, :scope => :company_id

  belongs_to :company

  enum time_series: {
    intraday: "intraday",
    daily: "daily"
  }

  def self.remove_old_data
    old_prices = self.where('time_series = ? AND time < ?', 'intraday', Time.current - 1.month)
    old_prices.destroy_all
  end
end
