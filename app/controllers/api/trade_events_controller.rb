class Api::TradeEventsController < ApplicationController
  def create
    @user = current_user
    @user.trade_events.create!(
      trade_type: trade_event_params[:trade_type],
      quantity: trade_event_params[:quantity].to_i,
      company_id: params[:company_id],
    )

    request = TradeEvent.process_stock(
      params[:trade_event],
      @user,
      params[:company_id],
    )

    ## delete this? TradeEvent.process_stock is not raising error
    if request != true && request.class == String
      render json: [request], status: 401
    end
  end

  def index
    @trade_events = TradeEvent.all
  end

  private

  def trade_event_params
    params.require(:trade_event).permit(:quantity, :trade_type)
  end
end
