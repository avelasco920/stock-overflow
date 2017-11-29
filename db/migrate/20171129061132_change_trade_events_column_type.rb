class ChangeTradeEventsColumnType < ActiveRecord::Migration[5.1]
  def change
    remove_column :trade_events, :type, :string
    add_column :trade_events, :trade_type, :string, null: false
  end
end
