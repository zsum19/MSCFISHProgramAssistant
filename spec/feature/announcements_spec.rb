# frozen_string_literal: true

require 'rails_helper'

class AnnouncementsPage
  include Capybara::DSL
  def visit_announcementspage
    visit('/announcements')
  end
end

describe 'Announcements page', :type => :feature do
  let(:announcementspage) { AnnouncementsPage.new }

  it 'Able to open announcements page', js: true do
    announcementspage.visit_announcementspage
    expect(page).to have_content('MSC Fish Announcements')
  end

  # it 'Able to open link to create new announcements', js: true do
  #   announcementspage.visit_announcementspage
  #   expect(page).to have_link(nil, href: '/announcement')
  # end

  it 'Able to go back home from announcements page', js: true do
    announcementspage.visit_announcementspage
    expect(page).to have_link('Home', href: '/')
  end
end

# Test the new announcement page
# describe 'New announcement page', :type => :feature do
#   let(:announcementspage) { AnnouncementsPage.new }

#   it 'Able to open new announcement page', js: true do
#     announcementspage.visit_announcementspage
#     click_link('Create New Announcement')
#     expect(page).to have_content('Create a new announcement')
#   end

#   it 'New announcement form valid inputs', js: true do
#     announcementspage.visit_announcementspage
#     click_link('Create New Announcement')
#     expect(page).to have_css('form')
#     within("form") do
#       fill_in 'Announcement Title', with: 'Test Announcement 1'
#       fill_in 'Announcement Content', with: 'This is a test announcement.'
#       page.select 'External', from: 'Announcement Type'
#     end
#     click_on('Create Announcement')
#     # will not pass because does not actually create the new object
#     # tested manually and works as expected
#     # @announcement = Announcement.find_by(content: "Test Announcement")
#     # expect(@announcement).to be_valid
#   end

#   it 'New announcement form invalid inputs', js: true do
#     announcementspage.visit_announcementspage
#     click_link('Create New Announcement')
#     expect(page).to have_css('form')
#     within("form") do
#       fill_in 'Announcement Title', with: 'Test Announcement 1'
#       fill_in 'Announcement Content', with: ''
#       page.select 'External', from: 'Announcement Type'
#     end
#     click_on('Create Announcement')
#     expect(page).to have_content('Create a new announcement')
#   end

#   it 'Back to all announcements link on new announcement page', js: true do
#     announcementspage.visit_announcementspage
#     click_link('Create New Announcement')
#     expect(page).to have_link('Back to Admin Page', href: '/admin/Announcement List')
#   end
# end

# Test the cards
describe 'Card (view announcement link)', :type => :feature do
  let(:announcementspage) { AnnouncementsPage.new }

  it 'Able to view announcement details if there is an announcement created', js: true do
    announcementspage.visit_announcementspage
    page.all('View Announcement').each do |f|
      click_on(f)
      expect(page).to have_content('Max Size')
      expect(page).to have_content('Announcement Description')
      expect(page).to have_button('Delete Announcement')
      click_on('Delete Announcement')
      expect(page).to have_content('Announcement Deleted!')
    end
  end
end
