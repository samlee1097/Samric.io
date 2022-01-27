Rails.application.routes.draw do

  resources :messages, only: [:index, :show, :create]
  resources :gamerooms, except: [:update]
  resources :users, except: [:update]
  
  mount ActionCable.server => "/cable"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
