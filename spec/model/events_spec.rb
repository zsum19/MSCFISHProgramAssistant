# frozen_string_literal: true

require 'rails_helper'

# Unit Testing for event model
RSpec.describe Event, type: :model do
  it 'does not save an event without any arguments' do
    event = described_class.new
    expect(event).not_to be_valid
  end

  it 'does not save an event without a name' do
    event = described_class.new(name: nil, max_size: 1, tickets_sold: 0, num_checked_in: 0)
    expect(event).not_to be_valid
  end

  it 'does not save an event without a max_size' do
    event = described_class.new(name: 'test', max_size: nil, tickets_sold: 0, num_checked_in: 0)
    expect(event).not_to be_valid
  end

  it 'does not save an event without a ticket_sold' do
    event = described_class.new(name: 'test', max_size: 1, tickets_sold: nil, num_checked_in: 0)
    expect(event).not_to be_valid
  end

  it 'does not save an event without a num_checked_in' do
    event = described_class.new(name: 'test', max_size: 1, tickets_sold: 0, num_checked_in: nil)
    expect(event).not_to be_valid
  end

  it 'saves an event with valid attributes' do
    event = described_class.new(name: 'test', max_size: 1, tickets_sold: 0, num_checked_in: 0)
    expect(event).to be_valid
  end
end
