# == Schema Information
#
# Table name: news_articles
#
#  id         :integer          not null, primary key
#  publisher  :string           not null
#  title      :string           not null
#  body       :text             not null
#  date       :datetime         not null
#  img_url    :string           not null
#  source     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  company_id :integer
#  views      :integer
#

class NewsArticle < ApplicationRecord
  validates :publisher, :title, :body, :date, :img_url,
            :source, :views, presence: true

  belongs_to :company

  def increment_view
    self.views += 1
    self.save
    self.views
  end
end
