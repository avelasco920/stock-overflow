class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.string :symbol, null: false
      t.integer :market_price
      t.text :biography
      t.string :ceo
      t.integer :founding_year
      t.integer :employees
      t.string :location

      t.timestamps
    end
    add_index :companies, :name, unique: true
    add_index :companies, :symbol, unique: true
  end
end
