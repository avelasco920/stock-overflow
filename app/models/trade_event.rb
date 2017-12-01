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
    if event[:trade_type] == "buy"
      return TradeEvent.handle_buy(event, user, company)
    elsif event[:trade_type] == "sell"
      return TradeEvent.handle_sell(event, user, company)
    end
  end

  def self.handle_buy(event, user, company)
    num_shares = event[:num_shares].to_i
    stock = Stock.find_by(user_id: user.id, company_id: company.id)
    stock_value = Stock.value(company, num_shares)
    if stock_value > user.cash_value
      return "You don't have enough funds for this purchase"
    elsif stock
      user.decrease_cash_value(stock_value)
      stock.num_shares += num_shares
      stock.save
    else
      user.decrease_cash_value(stock_value)
      user.stocks.create!(company_id: company.id, num_shares: event[:num_shares].to_i)
    end
  end

  def self.handle_sell(event, user, company)
    num_shares = event[:num_shares].to_i
    stock = Stock.find_by(user_id: user.id, company_id: company.id)
    stock_value = Stock.value(company, num_shares)
    if !stock
      return "You have no stock in this company to sell."
    elsif num_shares > stock.num_shares
      return "You don't have enough shares to make that sale."
    elsif num_shares == stock.num_shares
      user.increase_cash_value(stock_value)
      stock.destroy
    else
      user.increase_cash_value(stock_value)
      stock.num_shares -= num_shares
      stock.save
    end
  end

end
