# json.set! @company.id do
#   json.extract! @company, :id, :name, :symbol,
#                 :market_price, :biography, :ceo, :founding_year,
#                 :employees, :location, :created_at, :updated_at
#   num_shares = @user.stocks.each do |stock|
#     if stock.id == @company.id
#       return stock.num_shares
#     else
#       return 0
#     end
#   end
#   json.set! :num_shares, num_shares
#   json.set! :current_user_watching, @user.companies_watching.include?(@company.id)
# end
