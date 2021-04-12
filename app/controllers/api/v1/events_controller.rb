# frozen_string_literal: true

module Api
  module V1
    class EventsController < ApplicationController
      def index
        event = Event.all.order(created_at: :desc)
        render json: event
      end

      def create
        event = Event.create!(event_params)
        if event
          render json: event
        else
          render json: event.errors
        end
      end

      def show
        if event
          render json: event
        else
          render json: event.errors
        end
      end

      # def remigrate
      #   ActiveRecord::Migration.drop_table(:events, force: :cascade)
      #   ActiveRecord::Migration.create_table(:events)
      #   ActiveRecord::Migration.add_column(:events, :name, :string, null: false)
      #   ActiveRecord::Migration.add_column(:events, :location, :string)
      #   ActiveRecord::Migration.add_column(:events, :event_type, :string)
      #   ActiveRecord::Migration.add_column(:events, :max_size, :integer, null: false)
      #   ActiveRecord::Migration.add_column(:events, :tickets_sold, :integer, default: 0, null: false)
      #   ActiveRecord::Migration.add_column(:events, :num_checked_in, :integer, default: 0, null: false)
      #   ActiveRecord::Migration.add_column(:events, :date, :timestamp)
      #   ActiveRecord::Migration.add_column(:events, :description, :text)
      #   ActiveRecord::Migration.add_column(:events, :created_at, :timestamp)
      #   ActiveRecord::Migration.add_column(:events, :updated_at, :timestamp)
      # end

      def destroy
        event&.destroy
        render json: { message: 'Event Deleted!' }
      end

      def update
        event&.update(event_params)
        render json: event
      end

      private

      def event_params
        params.permit(:name, :location, :event_type, :max_size, :tickets_sold, :num_checked_in, :date, :description)
      end

      def event
        @event ||= Event.find(params[:id])
      end
    end
  end
end
