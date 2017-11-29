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

  def handle_existing(event)
    trade_type = event[:trade_type]
    quantity = event[:quantity].to_i
    if event[:trade_type] == "buy"
      self.num_shares += quantity
      self.save
    elsif trade_type == "sell" && quantity > self.num_shares
      raise "You don't don't have enough shares to make that sell.
        You currently have #{self.num_shares} shares
        of #{self.company.name}"
    elsif trade_type == "sell" && quantity == self.num_shares
      self.destroy
    else
      self.num_shares -= quantity
      self.save
    end
  end

end
