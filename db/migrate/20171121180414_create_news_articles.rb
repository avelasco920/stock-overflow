class CreateNewsArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :news_articles do |t|
      t.string :publisher, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.datetime :date, null: false
      t.string :img_url, null: false
      t.string :source, null: false

      t.timestamps
    end
    add_index :news_articles, :publisher
    add_index :news_articles, :title, unique: true
    add_index :news_articles, :date
  end
end
