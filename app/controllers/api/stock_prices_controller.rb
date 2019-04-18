class Api::StockPricesController < ApplicationController
  def show
    return head :bad_request if !['daily', 'intraday'].include?(params[:time_series])
    @company = Company.find_by(symbol: params[:company_symbol])
    render json: { errors: @company.errors.full_messages } and return if !@company

    if params[:time_series] == 'intraday' && @company.stock_prices.should_update?
      @company.update_stock_prices('intraday')
    end

    @last_closing_price = StockPrice.find_by(company: @company, time: TradingHours.new.last_closing_time)&.price

    lower_limit = params[:time_series] == 'daily' ? Time.current - 1.year : Time.current - 1.week
    @stock_prices = @company.stock_prices.where('time > ? AND time_series = ?', lower_limit, params[:time_series]).order(time: :asc)
  end
end
