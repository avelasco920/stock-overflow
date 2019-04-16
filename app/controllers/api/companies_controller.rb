class Api::CompaniesController < ApplicationController
  def show
    @company = Company.find(params[:id])
    @user = current_user
  end

  def index
    @companies = Company.all
    @user = current_user
  end

  def intraday_prices
    @company = Company.find(params[:id])
    @company.stock_prices
  end

  def prices
    return head :bad_request if !['daily', 'intraday'].include?(params[:time_series])
    @company = Company.find(params[:company_id])

    if params[:time_series] == 'intraday' && @company.should_update_stock_prices?
      @company.update_stock_prices('intraday')
    end

    @last_closing_price = StockPrice.find_by(company: @company, time: TradingHours.new.last_closing_time)&.price

    lower_limit = params[:time_series] == 'daily' ? Time.current - 1.year : Time.current - 1.week
    @stock_prices = @company.stock_prices.where('time > ? AND time_series = ?', lower_limit, params[:time_series]).order(time: :asc)
  end
end
