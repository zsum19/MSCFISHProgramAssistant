Rails.application.routes.draw do
  # namespace :api do
  #   namespace :v1 do
  #     get 'announcements/index'
  #     post 'announcements/create'
  #     get 'announcements/show/:id', to: 'accouncements#show'
  #     delete 'announcements/destroy/:id', to: 'accouncements#destroy'
  #   end
  # end
  namespace :api do
    namespace :v1 do
      get 'events/index'
      post 'events/create'
      get 'events/show/:id', to: 'events#show'
      delete 'events/destroy/:id', to: 'events#destroy'

      get 'announcements/index'
      post 'announcements/create'
      get 'announcements/show/:id', to: 'accouncements#show'
      delete 'announcements/destroy/:id', to: 'accouncements#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
