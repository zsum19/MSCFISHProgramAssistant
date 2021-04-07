# frozen_string_literal: true

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

      end

      def show

      end

      def destroy

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
