namespace :all_companies do
  desc "Updates stock price cache for all companies"
  task update_stock_prices: :environment do
    # abort('Unable to update stock prices on Weekends') if Date.current.on_weekend?
    Company.all.each.with_index do |company, count|
      company.stock_prices.clean_up
      FetchStockPricesJob.set(wait: 30.seconds * count).perform_later(company, 'daily')
      FetchStockPricesJob.set(wait: 30.seconds * count).perform_later(company, 'intraday')
    end
  end
end
