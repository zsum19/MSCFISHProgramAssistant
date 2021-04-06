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

      def destroy
        event&.destroy
        render json: { message: 'Event Deleted!' }
      end

      def overwrite
        @events = Event.all
        @events.each do |f|
          f.destroy
        end
      end

      def update
        event&.update(event_params)
        render json: event
      end

      private

      def event_params
        params.permit(:name, :location, :event_type, :max_size, :tickets_sold, :num_checked_in, :date, :description)
      end

      def upload_params
        params.permit(:_json, :event)
      end

      def event
        @event ||= Event.find(params[:id])
      end
    end
  end
end
