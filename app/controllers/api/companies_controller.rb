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
end
