Rails.application.routes.draw do
  root to: "markers#index"
  resources :markers, only: [:index, :show]
end
