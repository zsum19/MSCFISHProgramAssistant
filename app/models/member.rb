# frozen_string_literal: true

class Member < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  belongs_to :role, class_name: 'Role'
  has_many :announcements, class_name: 'Announcement', dependent: :nullify
  has_many :referrals, class_name: 'Referral', dependent: :delete_all
  has_many :attendees, through: :referrals

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :num_referrals, presence: true

  def self.to_csv
    attributes = %w[id first_name last_name email num_referrals role_id]
    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.find_each do |member|
        csv << member.attributes.values_at(*attributes)
      end
    end
  end

  devise :omniauthable, omniauth_providers: [:google_oauth2]
  def self.from_google(email)
    email = email[:email]

    return nil unless Member.where(email: email).exists?

    Member.find_by(email: email)
  end
end
