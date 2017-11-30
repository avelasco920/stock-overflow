companies = @companies_by_name + @companies_by_symbol
companies.each do |company|
  json.set! company.id do
    json.extract! company, :symbol, :name, :market_price
  end
end
