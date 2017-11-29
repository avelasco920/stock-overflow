# == Schema Information
#
# Table name: trade_events
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  company_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  trade_type :string           not null
#  num_shares :integer          not null
#

class TradeEvent < ApplicationRecord
  belongs_to :user
  belongs_to :company

  def self.process(event, user, company)
    TradeEvent.handle_buy(event, user, company) if event[:trade_type] == "buy"
    TradeEvent.handle_sell(event, user, company) if event[:trade_type] == "sell"
  end

  def self.handle_buy(event, user, company)
    num_shares = event[:num_shares].to_i
    stock = Stock.find_by(user_id: user.id, company_id: company.id)
    if stock
      stock.num_shares += num_shares
      stock.save
    elsif calc_stock_value(company, num_shares) > user.cash_value
      raise "You don't have enough funds for this purchase"
    else
      user.stocks.create!(company_id: company_id, num_shares: event[:num_shares].to_i)
    end
  end

  def self.handle_sell(event, user, company)
    num_shares = event[:num_shares].to_i
    stock = Stock.find_by(user_id: user.id, company_id: company.id)
    if stock && num_shares > stock.num_shares
      raise "You don't don't have enough shares to make that sell.
      You currently have #{stock.num_shares} shares
      of #{stock.company.name}"
    elsif num_shares == stock.num_shares
      stock.destroy
    else
      stock.num_shares -= num_shares
      stock.save
    end
  end

  def calc_stock_value(company, num_shares)
    company.market_value * num_shares
  end
end
