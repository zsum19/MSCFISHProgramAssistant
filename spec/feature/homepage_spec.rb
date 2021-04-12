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
    click_on('Events')
  end

  it 'Link to announcements page', js: true do
    homepage.visit_homepage
    expect(page).to have_link(nil, href: '/announcements')
    click_on('Announcements')
  end

  it 'Link to sign in', js: true do
    homepage.visit_homepage
    expect(page).to have_link(nil, href: '/members/auth/google_oauth2')
    click_on('Sign In')
  end
end
