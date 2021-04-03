Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'events/index'
      post 'events/create'
      patch 'events/update/:id', to: 'events#update'
      get 'events/show/:id', to: 'events#show'
      delete 'events/destroy/:id', to: 'events#destroy'

      get 'announcements/index'
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
    end
  end
  root 'homepage#index'
  #root to: 'dashboards#show'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Members routes for Oauth purposes
  devise_for :members, controllers: { omniauth_callbacks: 'members/omniauth_callbacks' }
  devise_scope :members do
    get 'members/sign_in', to: 'members/sessions#new', as: :new_member_session
    get 'members/sign_out', to: 'members/sessions#destroy', as: :destroy_member_session
  end

end
