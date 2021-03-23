# frozen_string_literal: true

class Role < ApplicationRecord
  has_many :member, class_name: 'Member'

  def self.to_csv
    attributes = %w[id name description]
    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.find_each do |role|
        csv << role.attributes.values_at(*attributes)
      end
    end
  end
end
