# frozen_string_literal: true

class Attendee < ApplicationRecord
  has_many :referrals, class_name: 'Referral'
  has_many :referred_by, through: :referrals
  has_many :eventattendances, class_name: 'Eventattendance'
  has_many :events, through: :eventattendances

  def self.to_csv
    attributes = %w[id name email]
    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.find_each do |attendee|
        csv << attendee.attributes.values_at(*attributes)
      end
    end
  end
end
