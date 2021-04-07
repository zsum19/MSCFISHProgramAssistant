class Members::OmniauthCallbacksController < Devise::OmniauthCallbacksController
    def google_oauth2
      redirect_to "http://www.rubyonrails.org"
      member = Member.from_google(from_google_params)
      puts "Hello World"
      if member.present?
        sign_out_all_scopes
        flash[:success] = t 'devise.omniauth_callbacks.success', kind: 'Google'
        redirect_to member_omniauth_authorize_path(:google_oauth2, redirect_uri: root_path)
        #sign_in_and_redirect member, event: :authentication
      else
        flash[:alert] = t 'devise.omniauth_callbacks.failure', kind: 'Google', reason: "#{auth.info.email} is not authorized."
        redirect_to root_path
        #redirect_to new_member_session_path
      end
    end
  
    protected
  
    def after_omniauth_failure_path_for(_scope)
      new_member_session_path
    end
  
    def after_sign_in_path_for(resource_or_scope)
      root_path
      #stored_location_for(resource_or_scope) || root_path
    end
  
    private
  
    def from_google_params
      @from_google_params ||= {
        uid: auth.uid,
        email: auth.info.email,
        full_name: auth.info.name,
        avatar_url: auth.info.image
      }
    end
  
    def auth
      @auth ||= request.env['omniauth.auth']
    end
  end