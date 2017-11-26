class AddViewsColumnToNewsArticles < ActiveRecord::Migration[5.1]
  def change
    add_column :news_articles, :views, :integer
  end
end
