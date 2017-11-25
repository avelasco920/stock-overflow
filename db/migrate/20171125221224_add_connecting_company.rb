class AddConnectingCompany < ActiveRecord::Migration[5.1]
  def change
    add_column :news_articles, :company_id, :integer
  end
end
