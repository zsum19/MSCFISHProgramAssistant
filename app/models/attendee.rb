class Attendee < ApplicationRecord
    has_many :referrals, class_name: "Referral"
    has_many :referred_by, through: :referrals
    has_many :eventattendances, class_name: "Eventattendance"
    has_many :events, through: :eventattendances
end
