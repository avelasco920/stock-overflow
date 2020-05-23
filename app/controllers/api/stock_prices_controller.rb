class Api::StockPricesController < ApplicationController
  def show
    @company = Company.find_by(symbol: params[:company_symbol])
    render json: { errors: 'Unable to find company with that ticker symbol.' } and return if !@company
    most_recent_trading_day = @company
      .stock_prices
      .select("date_trunc('day', time) AS day_time")
      .order(time: :asc)
      .pluck("date_trunc('day', time) AS day_time")
      .uniq
      .last

    @last_closing_price_before_most_recent_trading_day = @company
      .stock_prices
      .where('time < ? AND time_series = ?', most_recent_trading_day, 'intraday')
      .order(time: :asc)
      .last
      &.price

    @stock_prices_for_one_day = @company
      .stock_prices
      .where('time > ? AND time_series = ?', most_recent_trading_day, 'intraday')
      .order(time: :asc)

    @stock_prices_for_one_week = @company
      .stock_prices
      .where('time > ? AND time_series = ?', most_recent_trading_day - 1.week, 'intraday')
      .order(time: :asc)

    @stock_prices_for_one_month = @company
      .stock_prices
      .where('time > ? AND time_series = ?', most_recent_trading_day - 1.month, 'daily')
      .order(time: :asc)

    @stock_prices_for_three_months = @company
      .stock_prices
      .where('time > ? AND time_series = ?', most_recent_trading_day - 3.months, 'daily')
      .order(time: :asc)

    @stock_prices_for_one_year = @company
      .stock_prices
      .where('time > ? AND time_series = ?', most_recent_trading_day - 1.year, 'daily')
      .order(time: :asc)
  end
end
