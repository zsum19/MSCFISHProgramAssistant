class Event < ApplicationRecord
    has_many :announcements, class_name: Announcement
    has_many :eventattendances, class_name: Eventattendance
    has_many :attendees, through: :eventattendances
end
