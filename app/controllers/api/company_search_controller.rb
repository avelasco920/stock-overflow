class Api::CompanySearchController < ApplicationController
  def index
    @companies_by_symbol = Company.top_five_by_symbol(search_params[:query])
    @companies_by_name = Company.top_five_by_name(search_params[:query])
  end

  def search_params
    params.require(:search).permit(:query)
  end
end
