Rails.application.routes.draw do
  resources :users
  resources :posts
  resources :welcome, only: :index
  root "welcome#index"
end
