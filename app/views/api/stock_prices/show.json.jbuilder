time_format = params[:time_series] == 'daily' ? '%b %e, %Y' : '%b %-m, %Y %T EST'

json.extract! @company, :symbol
json.set! :last_closing_price, @last_closing_price
json.set! :time_series, params[:time_series]
json.set! :stock_prices, @stock_prices.each do |stock_price|
  json.set! :date, stock_price.time.in_time_zone('EST').strftime(time_format)
  json.extract! stock_price, :price
end
