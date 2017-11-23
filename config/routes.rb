Rails.application.routes.draw do
  namespace :api do
    get 'companies/show'
  end

  namespace :api do
    get 'companies/index'
  end

  namespace :api do
    get 'companies/update'
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
end
