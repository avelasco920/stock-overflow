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
#

class NewsArticle < ApplicationRecord
end
