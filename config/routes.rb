Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'events/index'
      post 'events/create'
      get 'events/show/:id', to: 'events#show'
      delete 'events/destroy/:id', to: 'events#destroy'

      get 'announcements/index'
      post 'announcements/create'
      get 'announcements/show/:id', to: 'announcements#show'
      delete 'announcements/destroy/:id', to: 'announcements#destroy'

      post 'attendees/create'
      patch 'attendees/update'

      get 'members/index'
      post 'members/create'
      get 'members/show/:id', to: 'members#show'
      delete 'members/destroy/:id', to: 'members#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
