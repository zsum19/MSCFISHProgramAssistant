require 'rails_helper'

class EventsPage
    include Capybara::DSL
    def visit_eventspage
        visit('/events')
    end
end

feature "Visit events page" do
    let(:eventspage) {EventsPage.new}
    scenario "Able to open events page", :js => true do
        eventspage.visit_eventspage
        expect(page).to have_content("MSC Fish Events")
    end
end

feature "New event link" do
    let(:eventspage) {EventsPage.new}
    scenario "Able to open link to create new event", :js => true do
        eventspage.visit_eventspage
        expect(page).to have_link(nil, :href=>'/event')
    end
end

feature "Back to home link" do
    let(:eventspage) {EventsPage.new}
    scenario "Able to go back home from event page", :js => true do
        eventspage.visit_eventspage
        expect(page).to have_link('Home', :href=>'/')
    end
end

# Test the new event page
feature "Visit new event page" do
    let(:eventspage) {EventsPage.new}
    scenario "Able to open new event page", :js => true do
        eventspage.visit_eventspage
        click_link('Create New Event')
        expect(page).to have_content("Create a new event")
    end
end

feature "New event form" do
    let(:eventspage) {EventsPage.new}
    scenario "Form on new events page is working correctly", :js => true do
        eventspage.visit_eventspage
        click_link('Create New Event')
        expect(page).to have_css('form')
        within("form") do
            fill_in 'Event name', with: 'Test event 10'
            fill_in 'Max Size', with: '123456'
            fill_in 'Tickets Sold', with: '5'
            fill_in 'Number of People Checked In', with: '1'
            fill_in 'Date of Event', with: '2021-01-01'
            fill_in 'Event Description', with: 'This is a test event'
        end
        click_on('Create Event')
    end
end

feature "Back to all events link" do
    let(:eventspage) {EventsPage.new}
    scenario "Back to all events link on new event page", :js => true do
        eventspage.visit_eventspage
        click_link('Create New Event')
        expect(page).to have_link('Back to All Events', :href=>'/events')
    end
end

# Test the cards
feature "Card (view event link)" do
    let(:eventspage) {EventsPage.new}
    scenario "Able to view event details if there is an event created", :js => true do
        eventspage.visit_eventspage
        page.all('View Event').each do |f|
            click_on(f)
            expect(page).to have_content("Max Size")
            expect(page).to have_content("Event Description")
            expect(page).to have_button("Delete Event")
        end
    end
end
