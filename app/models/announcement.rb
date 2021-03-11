class Announcement < ApplicationRecord
    belongs_to :author, class_name: "Member"
    belongs_to :event, class_name: "Event"

    def self.to_csv
        attributes = %w{id author_id event_id content}
        CSV.generate(headers: true) do |csv|
            csv << attributes

            all.each do |announcement|
                csv << announcement.attributes.values_at(*attributes)
            end
        end
    end
end
