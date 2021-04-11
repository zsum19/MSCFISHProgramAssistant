# frozen_string_literal: true

module Api
  module V1
    class AnnouncementsController < ApplicationController
      def index
        announcement = Announcement.all.order(created_at: :desc)
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

      # def remigrate
      #   ActiveRecord::Migration.drop_table(:announcements, force: :cascade)
      #   ActiveRecord::Migration.create_table(:announcements)
      #   ActiveRecord::Migration.add_column(:announcements, :member_id, :bigserial)
      #   ActiveRecord::Migration.add_foreign_key(:announcements, :members, column: :member_id)
      #   ActiveRecord::Migration.add_column(:announcements, :event_id, :bigserial)
      #   ActiveRecord::Migration.add_foreign_key(:announcements, :events, column: :event_id)
      #   ActiveRecord::Migration.add_column(:announcements, :title, :string, null: false)
      #   ActiveRecord::Migration.add_column(:announcements, :content, :text, null: false)
      #   ActiveRecord::Migration.add_column(:announcements, :external, :boolean)
      #   ActiveRecord::Migration.add_column(:announcements, :created_at, :timestamp)
      #   ActiveRecord::Migration.add_column(:announcements, :updated_at, :timestamp)
      # end

      def update
        announcement&.update(announcement_params)
        render json: announcement
      end

      private

      def announcement_params
        params.permit(:member_id, :event_id, :title, :content, :external)
      end

      def announcement
        @announcement ||= Announcement.find(params[:id])
      end
    end
  end
end
