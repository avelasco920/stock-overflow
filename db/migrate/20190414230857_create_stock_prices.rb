class CreateStockPrices < ActiveRecord::Migration[5.1]
  def change
    create_table :stock_prices do |t|
      t.integer :company_id, null: false
      t.float :price, null: false
      t.datetime :time, null: false

      t.timestamps
    end
    add_index :stock_prices, :company_id
    add_index :stock_prices, :time
  end
end
