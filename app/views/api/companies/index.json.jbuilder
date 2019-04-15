@companies.each do |company|
  json.set! company.id do
    json.extract! company, :id, :name, :symbol
    company_stock = @user.stocks.find { |stock| stock.company_id == company.id }
    json.set! :num_shares, company_stock ? company_stock.num_shares : 0
    latest_price = company.stock_prices.order(time: :desc).first&.price
    json.set! :market_price, latest_price ? latest_price : company.market_price
    json.set! :current_user_watching, @user.companies_watching.include?(company)
  end
end
