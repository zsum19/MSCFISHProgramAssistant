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
