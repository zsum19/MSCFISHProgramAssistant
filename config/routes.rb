Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'events/index'
      post 'events/create'
      patch 'events/update/:id', to: 'events#update'
      get 'events/show/:id', to: 'events#show'
      delete 'events/destroy/:id', to: 'events#destroy'

      get 'announcements/index'
      get 'announcements/index/:external', to: 'announcements#index'
      post 'announcements/create'
      patch 'announcements/update/:id', to: 'announcements#update'
      get 'announcements/show/:id', to: 'announcements#show'
      delete 'announcements/destroy/:id', to: 'announcements#destroy'

      post 'attendees/create'
      patch 'attendees/update'

      get 'members/index'
      post 'members/create'
      patch 'members/update/:id', to: 'members#update'
      get 'members/show/:id', to: 'members#show'
      delete 'members/destroy/:id', to: 'members#destroy'

      get 'referrals/index'
      get 'referrals/index/:member_id', to: 'referrals#index'
      post 'referrals/create'
      get 'referrals/show/:id', to: 'referrals#show'
      delete 'referrals/destroy', to: 'referrals#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
