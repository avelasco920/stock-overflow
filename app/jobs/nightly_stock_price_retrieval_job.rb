class NightlyStockPriceRetrievalJob < ApplicationJob
  queue_as :default

  def perform
    Company.all.each.with_index do |company, count|
      company.stock_prices.clean_up
      UpdateStockPricesJob.set(wait: 30.seconds * count).perform_later(company)
    end
  end
end
