class AddIndexToWatchListItems < ActiveRecord::Migration[5.1]
  def change
    remove_index :watchlist_items, :user_id
    remove_index :watchlist_items, :company_id
    add_index :watchlist_items, [:user_id, :company_id], unique: true
  end
end
