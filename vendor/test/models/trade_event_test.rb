# == Schema Information
#
# Table name: trade_events
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  company_id :integer          not null
#  quantity   :integer          not null
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TradeEventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
