require 'rails_helper'

class HomePage
  include Capybara::DSL
  def visit_homepage
    visit('/')
  end
end

describe 'Homepage', :type => :feature do
  let(:homepage) { HomePage.new }

  it 'Able to open home page', js: true do
    homepage.visit_homepage
    expect(page).to have_content('MSC FISH Program Assistant')
    expect(page).to have_content('LATEST ANNOUNCEMENTS')
    expect(page).to have_content('LATEST EVENTS')
  end

  it 'Link to events page', js: true do
    homepage.visit_homepage
    expect(page).to have_link(nil, href: '/allevents')
  end

  it 'Link to announcements page', js: true do
    homepage.visit_homepage
    expect(page).to have_link(nil, href: '/announcements')
  end

  it 'Link to check in page', js: true do
    homepage.visit_homepage
    expect(page).to have_link(nil, href: '/checkin/1')
  end

  it 'Button to download database', js: true do
    homepage.visit_homepage
    expect(page).to have_link(nil, href: 'index/database_dump.zip')
    click_link(nil, href:'index/database_dump.zip')
  end
end