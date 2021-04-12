require 'rails_helper'

RSpec.describe 'Protected Pages', :type => :feature do
  it 'Not able to open admin page', js: true do
    visit('/admin')
    expect(page).to have_content('Sign In')
  end

  it 'Not able to open new announcement page', js: true do
    visit('/announcement')
    expect(page).to have_content('Sign In')
  end

  it 'Not able to open new event page', js: true do
    visit('/event')
    expect(page).to have_content('Sign In')
  end

  it 'Not able to open new member page', js: true do
    visit('/admin')
    expect(page).to have_content('Sign In')
  end

  it 'Not able to download database', js: true do
    visit('/index/database_dump.zip')
  end
end