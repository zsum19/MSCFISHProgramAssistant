# frozen_string_literal: true

class Member < ApplicationRecord
  belongs_to :role, class_name: 'Role'
  has_many :announcements, class_name: 'Announcement'
  has_many :referrals, class_name: 'Referral'
  has_many :attendees, through: :referrals

  validates :name, presence: true
  validates :num_referrals, presence: true

  def self.to_csv
    attributes = %w[id name num_referrals role_id]
    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.find_each do |member|
        csv << member.attributes.values_at(*attributes)
      end
    end
  end

  devise :omniauthable, omniauth_providers: [:google_oauth2]
end
