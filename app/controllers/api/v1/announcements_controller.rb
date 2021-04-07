# frozen_string_literal: true

module Api
  module V1
    class AnnouncementsController < ApplicationController
      def index
        if(params.has_key?(:external))
          announcement = Announcement.where(:external => true?(params[:external]))
        else
          announcement = Announcement.all.order(created_at: :desc)
        end

        render json: announcement
      end

      def create
        announcement = Announcement.create!(announcement_params)
        if announcement
          render json: announcement
        else
          render json: announcement.errors
        end
      end

      def show
        if announcement
          render json: announcement
        else
          render json: announcement.errors
        end
      end

      def destroy
        announcement&.destroy
        render json: { message: 'Announcement Deleted!' }
      end

      def update
        announcement&.update(announcement_params)
        render json: announcement
      end

      private

      def true?(obj)
        obj.to_s.downcase == "true"
      end

      def announcement_params
        params.permit(:author_id, :event_id, :title, :content, :external)
      end

      def announcement
        @announcement ||= Announcement.find(params[:id])
      end
    end
  end
end
