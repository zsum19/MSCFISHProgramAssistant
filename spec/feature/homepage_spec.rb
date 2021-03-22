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
    expect(page).to have_content('MSCFISH Program Assistant')
    expect(page).to have_content('ANNOUNCEMENTS')
    expect(page).to have_content('EVENTS')
  end

  it 'Link to events page', js: true do
    homepage.visit_homepage
    expect(page).to have_link(nil, href: '/events')
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
    click_button('Download Database')
  end
end