class Event < ApplicationRecord
    has_many :announcements, class_name: "Announcement"
    has_many :eventattendances, class_name: "Eventattendance"
    has_many :attendees, through: :eventattendances

    def self.to_csv
        attributes = %w{id name max_size tickets_sold num_checked_in date description}
        CSV.generate(headers: true) do |csv|
            csv << attributes

            all.each do |event|
                csv << event.attributes.values_at(*attributes)
            end
        end
    end
end
