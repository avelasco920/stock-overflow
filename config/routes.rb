Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :companies, only: [:show, :index] do
      get 'prices'
      resource :watchlist_item, only: [:create, :destroy]
      resources :trade_events, only: [:create]
    end
    resources :stock_prices, only: [:show], param: :company_symbol
    resources :trade_events, only: [:index]
    resources :company_search, only: [:index]
    resources :newsarticles, only: [:show, :index, :update]
    resource :session, only: [:create, :destroy]
  end
  root to: "static_pages#root"
end
