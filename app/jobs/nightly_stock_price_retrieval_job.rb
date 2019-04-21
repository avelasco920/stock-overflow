class NightlyStockPriceRetrievalJob < ApplicationJob
  queue_as :default

  def perform
    Company.all.each.with_index do |company, count|
      company.stock_prices.clean_up
      UpdateStockPricesJob.set(wait: 1.minute * count).perform_later(company)
    end
  end
end
