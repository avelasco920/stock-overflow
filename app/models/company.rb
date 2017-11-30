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

end
