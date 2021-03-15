class Announcement < ApplicationRecord
    belongs_to :author, class_name: "Member"
    belongs_to :event, class_name: "Event"

    validates :content, presence: true
end
