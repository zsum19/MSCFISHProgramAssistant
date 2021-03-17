require 'rails_helper'

class EventsPage
  include Capybara::DSL
  def visit_eventspage
    visit('/events')
  end
end

# RSpec.describe 'Visit events page', type: :feature do
#   scenario 'Able to open events page', js: true do
#     visit events_path
#       expect(page).to have_content('MSC Fish Events')
#   end
# end

describe 'Visit events page', :type => :feature do
  let(:eventspage) { EventsPage.new }

  it 'Able to open events page', js: true do
    eventspage.visit_eventspage
    expect(page).to have_content('MSC Fish Events')
  end
end

describe 'New event link', :type => :feature do
  let(:eventspage) { EventsPage.new }

  it 'Able to open link to create new event', js: true do
    eventspage.visit_eventspage
    expect(page).to have_link(nil, href: '/event')
  end
end

describe 'Back to home link', :type => :feature do
  let(:eventspage) { EventsPage.new }

  it 'Able to go back home from event page', js: true do
    eventspage.visit_eventspage
    expect(page).to have_link('Home', href: '/')
  end
end

# Test the new event page
describe 'Visit new event page', :type => :feature do
  let(:eventspage) { EventsPage.new }

  it 'Able to open new event page', js: true do
    eventspage.visit_eventspage
    click_link('Create New Event')
    expect(page).to have_content('Create a new event')
  end
end

describe 'New event form', :type => :feature do
  let(:eventspage) { EventsPage.new }

  it 'Form on new events page is working correctly', js: true do
    eventspage.visit_eventspage
    click_link('Create New Event')
    expect(page).to have_css('form')
    within('form') do
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

describe 'Back to all events link', :type => :feature do
  let(:eventspage) { EventsPage.new }

  it 'Back to all events link on new event page', js: true do
    eventspage.visit_eventspage
    click_link('Create New Event')
    expect(page).to have_link('Back to All Events', href: '/events')
  end
end

# Test the cards
describe 'Card (view event link)', :type => :feature do
  let(:eventspage) { EventsPage.new }

  it 'Able to view event details if there is an event created', js: true do
    eventspage.visit_eventspage
    page.all('View Event').each do |f|
      click_on(f)
      expect(page).to have_content('Max Size')
      expect(page).to have_content('Event Description')
      expect(page).to have_button('Delete Event')
    end
  end
end
