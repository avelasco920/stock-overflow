class NightlyStockPriceRetrievalJob < ApplicationJob
  queue_as :default

  def perform
    Company.all.each.with_index do |company, count|
      company.clear_old_stock_prices
      UpdateStockPricesJob.set(wait: 1.minute * count).perform_later(company)
    end
  end
end
