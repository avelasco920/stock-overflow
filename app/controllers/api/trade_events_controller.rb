class Api::TradeEventsController < ApplicationController
  def create
    @trade_event = current_user.trade_events.create!(
      trade_type: trade_event_params[:trade_type],
      num_shares: trade_event_params[:num_shares].to_i,
      company_id: params[:company_id],
    )

    request = TradeEvent.process(
      params[:trade_event],
      current_user,
      Company.find(params[:company_id]),
    )

    ## delete this? TradeEvent.process_stock is not raising error
    if request != true && request.class == String
      render json: [request], status: 401
    end
  end

  def index
    @trade_event = TradeEvent.find(44)
    @trade_events = TradeEvent.all
  end

  private

  def trade_event_params
    params.require(:trade_event).permit(:num_shares, :trade_type)
  end
end
