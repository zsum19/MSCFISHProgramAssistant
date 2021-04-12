module Api
  module V1
    class ReferralsController < ApplicationController
      def index
        if(params.has_key?(:member_id))
          referral = Referral.where(:member_id => params[:member_id])
        else
          referral = Referral.all.order(created_at: :desc)
        end

        render json: referral
      end

      def create
        referral = Referral.create!(referral_params)

        if referral
          render json: referral
        else
          render json: referral.errors
        end
      end

      def show
        if referral
          render json: referral
        else
          render json: referral
        end
      end
      
      # def remigrate
      #   ActiveRecord::Migration.drop_table(:referrals, force: :cascade)
      #   ActiveRecord::Migration.create_table(:referrals)
      #   ActiveRecord::Migration.add_column(:referrals, :member_id, :bigserial)
      #   ActiveRecord::Migration.add_foreign_key(:referrals, :members, column: :member_id)
      #   ActiveRecord::Migration.add_column(:referrals, :attendee_id, :bigserial)
      #   ActiveRecord::Migration.add_foreign_key(:referrals, :attendees, column: :attendee_id)
      #   ActiveRecord::Migration.add_column(:referrals, :created_at, :timestamp)
      #   ActiveRecord::Migration.add_column(:referrals, :updated_at, :timestamp)
      # end

      def destroy
        referral&.destroy
        render json: { message: 'Referral Deleted!' }
      end


      private

      def referral_params
        params.permit(:member_id, :attendee_id)
      end

      def referral
        @referral ||= Referral.find(params[:id])
      end
    end
  end
end

