# == Schema Information
#
# Table name: companies
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  symbol        :string           not null
#  market_price  :integer
#  biography     :text
#  ceo           :string
#  founding_year :integer
#  employees     :integer
#  location      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Company < ApplicationRecord
end
