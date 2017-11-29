Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :companies, only: [:show, :index, :update] do
      resource :watchlist_item, only: [:create, :destroy]
      resources :trade_events, only: [:create]
    end
    resources :trade_events, only: [:index]
    resources :newsarticles, only: [:show, :index, :update]
    resource :session, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
end
