json.set! :company do
  json.partial! 'api/companies/company', company: @trade_event.company, user: @trade_event.user
end

json.set! :user do
  json.partial! "api/users/user", user: @trade_event.user
end
