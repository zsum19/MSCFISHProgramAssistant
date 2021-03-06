class Api::V1::EventsController < ApplicationController
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

  private

  def event_params
    params.permit(:name, :max_size, :tickets_sold, :num_checked_in, :date, :description)
  end

  def event
    @event ||= Event.find(params[:id])
  end
end
