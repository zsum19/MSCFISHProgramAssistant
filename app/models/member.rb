# frozen_string_literal: true

class Member < ApplicationRecord
  belongs_to :role, class_name: 'Role'
  has_many :announcements, class_name: 'Announcement'
  has_many :referrals, class_name: 'Referral'
  has_many :attendees, through: :referrals

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
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

  def self.from_google(email:, full_name:, uid:, avatar_url:)
    return nil unless email =~ /@tamu.edu\z/
    create_with(uid: uid, full_name: full_name, avatar_url: avatar_url).find_or_create_by!(email: email)
  end
end
