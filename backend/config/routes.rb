Rails.application.routes.draw do
  # devise_for :writers
  resources :books
  resources :writers
  resources :sessions, only: [:create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
