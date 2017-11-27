json.extract! company, :id, :name, :symbol,
              :market_price, :biography, :ceo, :founding_year,
              :employees, :location, :created_at, :updated_at
stock = user.stocks.find { |stock| stock.company_id == company.id }
json.set! :num_shares, stock ? stock.num_shares : 0
json.set! :current_user_watching, user.companies_watching.pluck(:id).include?(company.id)
