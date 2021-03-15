class Referral < ApplicationRecord
    belongs_to :member, class_name: "Member"
    belongs_to :attendee, class_name: "Attendee"

    def self.to_csv
        attributes = %w{id member_id attendee_id }
        CSV.generate(headers: true) do |csv|
            csv << attributes

            all.each do |referral|
                csv << referral.attributes.values_at(*attributes)
            end
        end
    end
end
