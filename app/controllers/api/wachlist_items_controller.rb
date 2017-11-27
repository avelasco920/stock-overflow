class Api::WachlistItemsController < ApplicationController
  def create
    @watchlist_item = current_user.watchlist_items.create!(company_id: params[:company_id])
  end

  def destroy
  end

end
