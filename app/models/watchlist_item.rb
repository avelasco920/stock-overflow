# == Schema Information
#
# Table name: watchlist_items
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  company_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class WatchlistItem < ApplicationRecord
  validates :user_id, uniqueness: { scope: :company_id }
  belongs_to :user
  belongs_to :company
end
