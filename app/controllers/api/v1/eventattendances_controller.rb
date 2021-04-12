# module Api
#   module V1
#     class EventattendancesController < ApplicationController
#       def create
#         eventattendance = Eventattendance.create!(eventattendance_params)
#       end

#       def remigrate
#         ActiveRecord::Migration.drop_table(:eventattendances, force: :cascade)
#         ActiveRecord::Migration.create_table(:eventattendances)
#         ActiveRecord::Migration.add_column(:eventattendances, :event_id, :bigserial)
#         ActiveRecord::Migration.add_foreign_key(:eventattendances, :events, column: :event_id)
#         ActiveRecord::Migration.add_column(:eventattendances, :attendee_id, :bigserial)
#         ActiveRecord::Migration.add_foreign_key(:eventattendances, :attendees, column: :attendee_id)
#         ActiveRecord::Migration.add_column(:eventattendances, :created_at, :timestamp)
#         ActiveRecord::Migration.add_column(:eventattendances, :updated_at, :timestamp)
#       end

#       private

#       def eventattendance_params
#         params.permit(:event_id, :attendee_id)
#       end

#       def eventattendance
#         @eventattendance ||= Eventattendance.find(params[:id])
#       end
#     end
#   end
# end 