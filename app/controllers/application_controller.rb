# frozen_string_literal: true

class ApplicationController < ActionController::Base
#    before_action :authenticate_member!
# protected
#     def after_sign_in_path_for(resource)
#         request.env['omniauth.origin'] || stored_location_for(resource) || root_path
#     end
# before_action :store_user_location!, if: :storable_location?
# # The callback which stores the current location must be added before you authenticate the user 
# # as `authenticate_user!` (or whatever your resource is) will halt the filter chain and redirect 
# # before the location can be stored.
 #before_action :authenticate_member!

# private
#   # Its important that the location is NOT stored if:
#   # - The request method is not GET (non idempotent)
#   # - The request is handled by a Devise controller such as Devise::SessionsController as that could cause an 
#   #    infinite redirect loop.
#   # - The request is an Ajax request as this can lead to very unexpected behaviour.
#   def storable_location?
#     request.get? && is_navigational_format? && !devise_controller? && !request.xhr? 
#   end

#   def store_user_location!
#     # :user is the scope we are authenticating
#     store_location_for(:member, request.fullpath)
#   end

#   def after_sign_in_path_for(resource_or_scope)
#     stored_location_for(resource_or_scope) || super
#   end

end
