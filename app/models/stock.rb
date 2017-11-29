# == Schema Information
#
# Table name: stocks
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  company_id :integer          not null
#  num_shares :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Stock < ApplicationRecord
  validates :user_id, :company_id, :num_shares, presence: true
  validates :num_shares, numericality: { greater_than: 0 }

  belongs_to :company
  belongs_to :user

  def self.value(company, num_shares)
    company.market_price * num_shares
  end

end
