class CreateWatchlistItems < ActiveRecord::Migration[5.1]
  def change
    create_table :watchlist_items do |t|
      t.integer :user_id, null: false
      t.integer :company_id, null: false

      t.timestamps
    end
    add_index :watchlist_items, :user_id
    add_index :watchlist_items, :company_id
  end
end
