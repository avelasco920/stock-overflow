class StockPrice < ApplicationRecord
  validates :company_id, :price, :time, presence: true
  validates_uniqueness_of :time, :scope => :company_id

  belongs_to :company
end
