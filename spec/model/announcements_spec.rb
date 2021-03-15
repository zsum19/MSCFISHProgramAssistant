require 'rails_helper'

# Unit Testing for announcement model
RSpec.describe Announcement, type: :model do
    scenario "Should not save an announcement without any arguments" do
        announcement = Announcement.new
        expect(announcement).to_not be_valid
    end

    scenario "Should not save an announcement without content" do
        announcement = Announcement.new(content: nil, event_id: 1, author_id: 1)
        expect(announcement).to_not be_valid
    end

    scenario "Should not save an announcement without an event id" do
        announcement = Announcement.new(content: "test", event_id: nil, author_id: 1)
        expect(announcement).to_not be_valid
    end

    scenario "Should not save an announcement without author id" do
        announcement = Announcement.new(content: "test", event_id: 1, author_id: nil)
        expect(announcement).to_not be_valid
    end

    scenario "Should save an announcement with valid attributes" do
        announcement = Announcement.new(content: "test", event_id: 1, author_id: 1)
        expect(announcement).to be_valid
    end
end