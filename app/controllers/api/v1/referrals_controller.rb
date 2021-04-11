module Api
  module V1
    class ReferralsController < ApplicationController
      def create
        referral = Referral.create!(referral_params)
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