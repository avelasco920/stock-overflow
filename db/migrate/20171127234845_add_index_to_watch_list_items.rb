class AddIndexToWatchListItems < ActiveRecord::Migration[5.1]
  def change
    add_column :watch_list_items, :user_id, :integer
    add_index :watch_list_items, :user_id
  end
end
