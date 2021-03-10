require 'rails_helper'

# Unit Testing for event model
RSpec.describe Event, type: :model do
    scenario "Should not save an event without any arguments" do
        event = Event.new
        expect(event).to_not be_valid
    end

    scenario "Should not save an event without a name" do
        event = Event.new(name: nil, max_size: 1, tickets_sold: 0, num_checked_in: 0)
        expect(event).to_not be_valid
    end

    scenario "Should not save an event without a max_size" do
        event = Event.new(name: "test", max_size: nil, tickets_sold: 0, num_checked_in: 0)
        expect(event).to_not be_valid
    end

    scenario "Should not save an event without a ticket_sold" do
        event = Event.new(name: "test", max_size: 1, tickets_sold: nil, num_checked_in: 0)
        expect(event).to_not be_valid
    end

    scenario "Should not save an event without a num_checked_in" do
        event = Event.new(name: "test", max_size: 1, tickets_sold: 0, num_checked_in: nil)
        expect(event).to_not be_valid
    end

    scenario "Should save an event with valid attributes" do
        event = Event.new(name: "test", max_size: 1, tickets_sold: 0, num_checked_in: 0)
        expect(event).to be_valid
    end
end