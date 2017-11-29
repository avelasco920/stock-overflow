class ChangeTradeEventsQuantityColumnName < ActiveRecord::Migration[5.1]
  def change
    remove_column :trade_events, :quantity, :integer, null: false
    add_column :trade_events, :num_shares, :integer, null: false
  end
end
