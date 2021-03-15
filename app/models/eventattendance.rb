class Eventattendance < ApplicationRecord
    belongs_to :event, class_name: "Event"
    belongs_to :attendee, class_name: "Attendee"

    def self.to_csv
        attributes = %w{id event_id attendee_id }
        CSV.generate(headers: true) do |csv|
            csv << attributes

            all.each do |eventattendance|
                csv << eventattendance.attributes.values_at(*attributes)
            end
        end
    end
end
