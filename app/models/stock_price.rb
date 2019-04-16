class StockPrice < ApplicationRecord
  validates :company_id, :price, :time, :time_series, presence: true
  validates_uniqueness_of :time, :scope => :company_id

  belongs_to :company

  enum time_series: {
    intraday: "intraday",
    daily: "daily"
  }
end
