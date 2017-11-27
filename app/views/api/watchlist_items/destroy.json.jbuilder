# json.set! @watchlist_item.company_id do
#   json.set! :current_user_watching, @watchlist_item.user.companies_watching.pluck(:id).include?(@watchlist_item.company.id)
# end

json.partial! 'api/companies/company', company: @watchlist_item.company, user: @watchlist_item.user
