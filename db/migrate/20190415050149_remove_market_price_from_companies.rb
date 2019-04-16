class RemoveMarketPriceFromCompanies < ActiveRecord::Migration[5.1]
  def change
    remove_column :companies, :market_price
  end
end
