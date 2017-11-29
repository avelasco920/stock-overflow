class CreateTradeEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :trade_events do |t|
      t.integer :user_id, null: false
      t.integer :company_id, null: false
      t.integer :quantity, null: false
      t.string :type, null: false

      t.timestamps
    end
  end
end
