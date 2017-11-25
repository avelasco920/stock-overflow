# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  contact_number  :string
#  stocks_value    :float            not null
#  cash_value      :float            not null
#  portfolio_value :float            not null
#  img_url         :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
