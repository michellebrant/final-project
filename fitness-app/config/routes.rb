Rails.application.routes.draw do

get '/login', :to => 'sessions#new', :as => :login
match '/auth/:provider/callback', :to => 'sessions#create', :via => [:get], :as => 'sessions_create'
match '/auth/failure', :to => 'sessions#failure', :via => [:get], :as => 'sessions_failure'
get '/logout', :to => 'sessions#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

# 'https://www.mapmyfitness.com/v7.1/oauth2/uacf/authorize/?client_id='+ENV["UAKEY"]+' &response_type=code&redirect_uri=http%3A%2F%2Fwww.localhost:3000%2Fcallback%2F%3Fparam1%3Dval1'

 # http://www.example.com/callback/?param1=val1


