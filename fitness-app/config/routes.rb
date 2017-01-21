Rails.application.routes.draw do

  get '/login', :to => 'sessions#new', :as => :login
  match '/auth/:provider/callback', :to => 'sessions#create', :via => [:get], :as => 'sessions_create'
  match '/auth/failure', :to => 'sessions#failure', :via => [:get], :as => 'sessions_failure'
  get '/logout', :to => 'sessions#destroy'
  resources :logs
  get '/home', :to => 'sessions#show', :as => :home
  get '/edit', :to => 'sessions#edit', :as => :edit
  patch "/edit" => "sessions#update", :as => :update
  resources :weightbyday
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end



