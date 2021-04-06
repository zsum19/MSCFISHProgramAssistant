# frozen_string_literal: true

class Announcement < ApplicationRecord
  belongs_to :author, class_name: 'Member'
  belongs_to :event, class_name: 'Event'

  validates :title, presence: true
  validates :content, presence: true

  def self.to_csv
    attributes = %w[author_id event_id content]
    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.find_each do |announcement|
        csv << announcement.attributes.values_at(*attributes)
      end
    end
  end
end
