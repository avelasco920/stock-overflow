current_user = @trade_event.user

json.set! current_user.id do
  json.array! current_user.trade_events do |event|
    json.set! :created_at, event.created_at
    json.set! :company, event.company.symbol
    json.set! :num_shares, event.num_shares
    json.set! :trade_type, event.trade_type
  end
end
