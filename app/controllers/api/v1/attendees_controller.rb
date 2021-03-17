# frozen_string_literal: true

module Api
  module V1
    class AttendeesController < ApplicationController
      def index
        attendee = Attendee.all.order(created_at: :desc)
        render json: attendee
      end

      def create
        attendee = Attendee.create!(attendee_params)
        if attendee
          render json: attendee
        else
          render json: attendee.errors
        end
      end

      def destroy
        attendee&.destroy
        render json: { message: 'attendee Deleted!' }
      end

      private

      def attendee_params
        params.permit(:name, :email, :created_at, :updated_at)
      end

      def attendee
        @attendee ||= Attendee.find(params[:id])
      end
    end
  end
end
