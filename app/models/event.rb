# frozen_string_literal: true

class Event < ApplicationRecord
  has_many :announcements, class_name: 'Announcement', dependent: :nullify
  has_many :eventattendances, class_name: 'Eventattendance', dependent: :nullify
  has_many :attendees, through: :eventattendances

  validates :name, presence: true
  validates :max_size, presence: true
  validates :tickets_sold, presence: true
  validates :num_checked_in, presence: true

  def self.to_csv
    attributes = %w[id name location event_type max_size tickets_sold num_checked_in date description]
    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.find_each do |event|
        csv << event.attributes.values_at(*attributes)
      end
    end
  end
end
