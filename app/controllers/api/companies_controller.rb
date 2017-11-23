class Api::CompaniesController < ApplicationController
  def show
    @company = Company.find(params[:id])
    @user = current_user
  end

  def index
    watchlist = current_user.companies_watching
    invested = current_user.invested_companies
    @companies = (watchlist + invested).uniq
  end

  def update
    @company = Company.find(params[:id])
  end
end
