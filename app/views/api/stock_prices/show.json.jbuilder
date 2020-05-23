
json.extract! @company, :symbol
json.set! :last_closing_price_before_most_recent_trading_day, @last_closing_price_before_most_recent_trading_day
json.set! :time_series, params[:time_series]
json.set! :stock_prices_for_one_day, @stock_prices_for_one_day.each do |stock_price|
  json.set! :time, stock_price.time.in_time_zone('EST').strftime('%b %e, %Y %T EST')
  json.extract! stock_price, :price
end
json.set! :stock_prices_for_one_week, @stock_prices_for_one_week.each do |stock_price|
  json.set! :time, stock_price.time.in_time_zone('EST').strftime('%b %e, %Y %T EST')
  json.extract! stock_price, :price
end
json.set! :stock_prices_for_one_month, @stock_prices_for_one_month.each do |stock_price|
  json.set! :time, stock_price.time.in_time_zone('EST').strftime('%b %e, %Y')
  json.extract! stock_price, :price
end
json.set! :stock_prices_for_three_months, @stock_prices_for_three_months.each do |stock_price|
  json.set! :time, stock_price.time.in_time_zone('EST').strftime('%b %e, %Y')
  json.extract! stock_price, :price
end
json.set! :stock_prices_for_one_year, @stock_prices_for_one_year.each do |stock_price|
  json.set! :time, stock_price.time.in_time_zone('EST').strftime('%b %e, %Y')
  json.extract! stock_price, :price
end
