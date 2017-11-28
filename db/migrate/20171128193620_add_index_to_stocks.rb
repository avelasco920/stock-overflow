class AddIndexToStocks < ActiveRecord::Migration[5.1]
  def change
    remove_index :stocks, :user_id
    remove_index :stocks, :company_id
    add_index :stocks, [:user_id, :company_id], unique: true
  end
end
