class Event < ApplicationRecord
    has_many :announcements, class_name: "Announcement"
    has_many :eventattendances, class_name: "Eventattendance"
    has_many :attendees, through: :eventattendances

    validates :name, presence: true
    validates :max_size, presence: true
    validates :tickets_sold, presence: true
    validates :num_checked_in, presence: true
end
