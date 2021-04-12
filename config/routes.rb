Rails.application.routes.draw do
  # devise_for :members
  devise_for :members, controllers: { omniauth_callbacks: 'members/omniauth_callbacks' }
  # devise_scope :member do
  #   get 'members/sign_in', to: 'members/sessions#new', as: :new_admin_session
  #   get 'members/sign_out', to: 'members/sessions#destroy', as: :destroy_admin_session
  # end
  namespace :api do
    namespace :v1 do
      get 'events/index'
      post 'events/create'
      patch 'events/update/:id', to: 'events#update'
      get 'events/show/:id', to: 'events#show'
      delete 'events/destroy/:id', to: 'events#destroy'
      # post 'events/remigrate'

      get 'announcements/index'
      get 'announcements/index/:external', to: 'announcements#index'
      post 'announcements/create'
      patch 'announcements/update/:id', to: 'announcements#update'
      get 'announcements/show/:id', to: 'announcements#show'
      delete 'announcements/destroy/:id', to: 'announcements#destroy'
      # post 'announcements/remigrate'

      post 'attendees/create'
      patch 'attendees/update'
      # post 'attendees/remigrate'
      # post 'attendees/create_this_only'

      get 'members/index'
      post 'members/create'
      patch 'members/update/:id', to: 'members#update'
      get 'members/show/:id', to: 'members#show'
      delete 'members/destroy/:id', to: 'members#destroy'
      get 'members/currentMember'
      post 'members/remigrate'

      get 'referrals/index'
      get 'referrals/index/:member_id', to: 'referrals#index'
      post 'referrals/create'
      get 'referrals/show/:id', to: 'referrals#show'
      delete 'referrals/destroy', to: 'referrals#destroy'
      # post 'referrals/create'
      # post 'referrals/remigrate'

      # post 'roles/create'
      # post 'roles/remigrate'

      # post 'eventattendances/create'
      # post 'eventattendances/remigrate'
    end
  end
  root 'homepage#index'
  get '/admin', action: :index, controller: 'homepage'
  get '/memberpage', action: :index, controller: 'homepage'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
