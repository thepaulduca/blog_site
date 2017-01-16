Rails.application.routes.draw do
  resources :users
  resources :posts
  resources :welcome, only: :index
  resources :session, only: [:new, :create, :destroy]
  root "welcome#index"
end
