@trade_events.each do |trade_event|
  json.set! trade_event.user_id do
    events = @trade_events.select { |e| e.user_id == trade_event.user_id }
    json.array! events do |event|
      json.set! :created_at, event.created_at
      json.set! :company, event.company.symbol
      json.set! :num_shares, event.num_shares
      json.set! :trade_type, event.trade_type
    end
  end
end

#
# json.set! :company do
#   json.partial! 'api/companies/company', company: @trade_event.company, user: @trade_event.user
# end
#
# json.set! :user do
#   json.partial! "api/users/user", user: @trade_event.user
# end
