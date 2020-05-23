class FetchStockPricesJob < ApplicationJob
  queue_as :default

  def perform(company, time_series)
    company.update_stock_prices(time_series)
  end
end
