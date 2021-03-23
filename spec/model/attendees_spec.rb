require 'rails_helper'

# Unit Testing for attendee model
RSpec.describe Attendee, type: :model do
  it 'does not save an attendee without any arguments' do
    attendee = described_class.new
    expect(attendee).not_to be_valid
  end

  it 'does not save an attendee without name' do
    attendee = described_class.new(name: nil, email: 'test@test.com')
    expect(attendee).not_to be_valid
  end

  it 'does not save an attendee without email' do
    attendee = described_class.new(name: 'test', email: nil)
    expect(attendee).not_to be_valid
  end

  it 'saves an attendee with valid attributes' do
    attendee = described_class.new(name: 'test', email: 'test@test.com')
    expect(attendee).to be_valid
  end
end