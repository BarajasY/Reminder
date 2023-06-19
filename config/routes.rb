Rails.application.routes.draw do

  root "articles#main"

  resources :articles
end
