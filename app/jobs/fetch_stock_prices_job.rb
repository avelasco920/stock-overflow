class FetchStockPricesJob < ApplicationJob
  queue_as :default

  def perform(company)
    company.update_stock_prices('daily')
    company.update_stock_prices('intraday')
  end
end
