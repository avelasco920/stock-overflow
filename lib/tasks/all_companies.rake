namespace :all_companies do
  desc "Updates stock price cache for all companies"
  task update_stock_prices: :environment do
    abort('Unable to update stock prices on Weekends') if Date.current.on_weekend?
    Company.all.each.with_index do |company, count|
      FetchStockPricesJob.perform_later(company, 'daily')
      FetchStockPricesJob.perform_later(company, 'intraday')
      company.stock_prices.clean_up
    end
  end
end
