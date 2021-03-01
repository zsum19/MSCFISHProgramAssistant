class Api::V1::attendeesController < ApplicationController
  def index
    attendee = attendee.all.order(created_at: :desc)
    render json: attendee
  end

  def create
    attendee = attendee.create!(attendee_params)
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
    @attendee ||= attendee.find(params[:id])
  end
end
