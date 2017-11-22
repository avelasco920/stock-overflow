json.set! @user.id do
  json.extract! @user, :id, :username, :first_name,
                :last_name, :email, :contact_number,
                :img_url, :stocks_value, :cash_value,
                :portfolio_value

  json.companies_watching do
    json.array! @user.companies_watching.pluck(:id)
  end

  json.stocks do
    @user.stocks.each do |stock|
      json.set! stock.company_id, stock.num_shares
    end
  end
end
