# frozen_string_literal: true

class Referral < ApplicationRecord
  belongs_to :member, class_name: 'Member'
  belongs_to :attendee, class_name: 'Attendee'

  def self.to_csv
    attributes = %w[member_id attendee_id]
    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.find_each do |referral|
        csv << referral.attributes.values_at(*attributes)
      end
    end
  end
end
