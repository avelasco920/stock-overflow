@companies.each do |company|
  json.set! company.id do
    json.extract! company, :id, :name, :symbol, :market_price
    company_stock = @user.stocks.find { |stock| stock.company_id == company.id }
    json.set! :num_shares, company_stock ? company_stock.num_shares : 0
    json.set! :current_user_watching, @user.companies_watching.include?(company)
  end
end
