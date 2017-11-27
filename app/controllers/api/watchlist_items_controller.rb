class Api::WatchlistItemsController < ApplicationController
  def create
    @watchlist_item = current_user.watchlist_items.create!(company_id: params[:company_id])
  end

  def destroy
    @watchlist_item = current_user.watchlist_items.find_by(company_id: params[:company_id])
    @watchlist_item.destroy!
  end
end
