class Api::TradeEventsController < ApplicationController
  def create
    company = Company.find(params[:company_id])
    user = current_user
    request = TradeEvent.process(
      params[:trade_event],
      user,
      company
    )
    @trade_event = user.trade_events.create!(
      trade_type: trade_event_params[:trade_type],
      num_shares: trade_event_params[:num_shares].to_i,
      company_id: company.id,
    )
    @user = current_user
    @company = Company.find(params[:company_id])
    if request != true && request.class == String
      render json: request, status: 401
    end
  end

  def index
    @trade_events = TradeEvent.all
  end

  private

  def trade_event_params
    params.require(:trade_event).permit(:num_shares, :trade_type)
  end
end
