# frozen_string_literal: true

class Attendee < ApplicationRecord
  has_many :referrals, class_name: 'Referral', dependent: :nullify
  has_many :referred_by, through: :referrals
  has_many :eventattendances, class_name: 'Eventattendance', dependent: :nullify
  has_many :events, through: :eventattendances

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true

  def self.to_csv
    attributes = %w[first_name last_name email]
    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.find_each do |attendee|
        csv << attendee.attributes.values_at(*attributes)
      end
    end
  end
end
