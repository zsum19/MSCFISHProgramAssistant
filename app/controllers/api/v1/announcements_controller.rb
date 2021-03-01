class Api::V1::AnnouncementsController < ApplicationController
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

  private

  def announcement_params
    params.permit(:author_id, :event_id, :content, :date_posted)
  end

  def announcement
    @announcement ||= Announcement.find(params[:id])
  end
end
