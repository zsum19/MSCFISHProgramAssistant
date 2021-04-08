Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'events/index'
      post 'events/create'
      patch 'events/update/:id', to: 'events#update'
      get 'events/show/:id', to: 'events#show'
      delete 'events/destroy/:id', to: 'events#destroy'
      post 'events/remigrate'

      get 'announcements/index'
      post 'announcements/create'
      patch 'announcements/update/:id', to: 'announcements#update'
      get 'announcements/show/:id', to: 'announcements#show'
      delete 'announcements/destroy/:id', to: 'announcements#destroy'
      post "announcements/remigrate"

      post 'attendees/create'
      patch 'attendees/update'
      post "attendees/remigrate"
      post "attendees/create_this_only"

      get 'members/index'
      post 'members/create'
      patch 'members/update/:id', to: 'members#update'
      get 'members/show/:id', to: 'members#show'
      delete 'members/destroy/:id', to: 'members#destroy'
      post "members/remigrate"
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
