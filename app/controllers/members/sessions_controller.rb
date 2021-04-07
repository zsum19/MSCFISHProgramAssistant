class Members::SessionsController < Devise::SessionsController
    def after_sign_out_path_for(_resource_or_scope)
      #new_admin_session_path
      "http://www.rubyonrails.org"

    end
  
    def after_sign_in_path_for(resource_or_scope)
      #root_path
      "http://www.rubyonrails.org"

      #stored_location_for(resource_or_scope) || root_path
    end
  end