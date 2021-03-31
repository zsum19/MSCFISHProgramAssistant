# frozen_string_literal: true

require 'rails_helper'

# Unit Testing for announcement model
RSpec.describe Announcement, type: :model do
  it 'does not save an announcement without any arguments' do
    announcement = described_class.new
    expect(announcement).not_to be_valid
  end

  it 'does not save an announcement without title' do
    announcement = described_class.new(title: nil, content: 'test', event_id: 1, author_id: 1)
    expect(announcement).not_to be_valid
  end

  it 'does not save an announcement without content' do
    announcement = described_class.new(title: 'Test', content: nil, event_id: 1, author_id: 1)
    expect(announcement).not_to be_valid
  end

  it 'does not save an announcement without an event id' do
    announcement = described_class.new(title: 'Test', content: 'test', event_id: nil, author_id: 1)
    expect(announcement).not_to be_valid
  end

  it 'does not save an announcement without author id' do
    announcement = described_class.new(title: 'Test', content: 'test', event_id: 1, author_id: nil)
    expect(announcement).not_to be_valid
  end

  it 'saves an announcement with valid attributes' do
    announcement = described_class.new(title: 'Test', content: 'test', event_id: 1, author_id: 1)
    expect(announcement).to be_valid
  end
end
