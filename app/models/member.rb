class Member < ApplicationRecord
    belongs_to :role, class_name: "Role"
    has_many :announcements, class_name: "Announcement"
    has_many :referrals, class_name: "Referral"
    has_many :attendees, through: :referrals

    def self.to_csv
        attributes = %w{id name num_referrals role_id }
        CSV.generate(headers: true) do |csv|
            csv << attributes

            all.each do |member|
                csv << member.attributes.values_at(*attributes)
            end
        end
    end
end
