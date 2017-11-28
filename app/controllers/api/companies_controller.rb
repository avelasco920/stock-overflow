class Api::CompaniesController < ApplicationController
  def show
    @company = Company.find(params[:id])
    @user = current_user
  end

  def index
    @companies = Company.all
    @user = current_user
  end

  def update
    @company = Company.find(params[:id])
  end
end
