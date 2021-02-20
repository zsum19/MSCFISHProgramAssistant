class Member < ApplicationRecord
    belongs_to :role, class_name: Role
    has_many :announcements, class_name: Announcement
    has_many :referrals, class_name: Referral
    has_many :attendees, through: :referrals
end
