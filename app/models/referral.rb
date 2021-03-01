class Referral < ApplicationRecord
    belongs_to :member, class_name: "Member"
    belongs_to :attendee, class_name: "Attendee"
end
