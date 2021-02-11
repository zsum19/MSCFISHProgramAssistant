class Attendee < ApplicationRecord
    belongs_to :referred_by, class_name: Member
    belongs_to :event, class_name: Event
end
