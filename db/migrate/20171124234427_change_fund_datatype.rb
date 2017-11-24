class ChangeFundDatatype < ActiveRecord::Migration[5.1]
  def up
    change_column :users, :portfolio_value, :float
    change_column :users, :cash_value, :float
    change_column :users, :stocks_value, :float
    change_column :companies, :market_price, :float
  end

  def down
    change_column :users, :portfolio_value, :integer
    change_column :users, :cash_value, :integer
    change_column :users, :stocks_value, :integer
    change_column :companies, :market_price, :integer
  end
end
