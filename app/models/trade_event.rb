# == Schema Information
#
# Table name: trade_events
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  company_id :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  trade_type :string           not null
#

class TradeEvent < ApplicationRecord
  belongs_to :user
  belongs_to :company


  def self.process_stock(event, user, company_id)
    @stock = Stock.find_by(user_id: user.id, company_id: company_id)
    if @stock
      return @stock.handle_existing(event)
    elsif !@stock && event[:trade_type] == "sell"
      raise "You don't own any shares of this company."
    elsif !@stock && event[:trade_type] == "buy"
      user.stocks.create!(company_id: company_id, num_shares: event[:quantity].to_i)
    end
  end

end
