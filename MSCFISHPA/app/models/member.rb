class Member < ApplicationRecord
    has_many :announcements, class_name: Announcement
    has_many :attendees, class_name: Attendee
end
