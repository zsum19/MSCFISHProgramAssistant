require 'rails_helper'

class EventsPage
  include Capybara::DSL
  def visit_eventspage
    visit('/events')
  end
end

describe 'Events page', :type => :feature do
  let(:eventspage) { EventsPage.new }

  it 'Able to open events page', js: true do
    eventspage.visit_eventspage
    expect(page).to have_content('MSC Fish Events')
  end

  it 'Able to open link to create new events', js: true do
    eventspage.visit_eventspage
    expect(page).to have_link(nil, href: '/event')
  end

  it 'Able to go back home from events page', js: true do
    eventspage.visit_eventspage
    expect(page).to have_link('Home', href: '/')
  end
end

# Test the new event page
describe 'New event page', :type => :feature do
  let(:eventspage) { EventsPage.new }

  it 'Able to open new event page', js: true do
    eventspage.visit_eventspage
    click_link('Create New Event')
    expect(page).to have_content('Create a new event')
  end

  it 'New event form valid inputs', js: true do
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

  it 'New event form invalid inputs', js: true do
    eventspage.visit_eventspage
    click_link('Create New Event')
    expect(page).to have_css('form')
    within('form') do
      fill_in 'Event name', with: 'Test event 10'
      fill_in 'Max Size', with: '123456'
      fill_in 'Tickets Sold', with: ''
      fill_in 'Number of People Checked In', with: '1'
      fill_in 'Date of Event', with: '2021-01-01'
      fill_in 'Event Description', with: 'This is a test event'
    end
    click_on('Create Event')
    expect(page).to have_content('Create a new event')
  end

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
      click_on('Delete Event')
      expect(page).to have_content('Event Deleted!')
    end
  end
end
