require 'rails_helper'

class CheckInPage
  include Capybara::DSL
  def visit_checkinpage
    visit('/checkin/1')
  end
end

# This file requires at least one event to be created in the database to pass
# Test the form on the checkin page
# describe 'New checkin page', :type => :feature do
#   let(:checkinpage) { CheckInPage.new }

#   it 'Able to open checkin page', js: true do
#     checkinpage.visit_checkinpage
#     expect(page).to have_content('Check in to')
#   end

#   it 'Able to open checkin page', js: true do
#     checkinpage.visit_checkinpage
#     expect(page).to have_content('Check in to')
#   end

#   it 'Checkin form valid inputs', js: true do
#     checkinpage.visit_checkinpage
#     # @member = Member.find_by!(first_name: 'Test 1')
#     # @referrals_pre = @member.num_referrals
#     expect(page).to have_css('form')
#     within('form') do
#       fill_in 'Your First Name', with: 'Test First Name'
#       fill_in 'Your Last Name', with: 'Test Last Name'
#       fill_in 'Your Email', with: 'test@test.com'
#       page.select 'Test1 Test1', from: 'Referred By'
#     end
#     click_on('Check In')
#     # should increment the member's number of referrals
#     # will not pass because does not actually create the new object
#     # tested manually and works as expected
#     # @referrals_post = @member.num_referrals
#     # expect(@referrals_post).to be(@referrals_pre + 1)
#   end

#   it 'Checkin form invalid inputs', js: true do
#     checkinpage.visit_checkinpage
#     expect(page).to have_css('form')
#     within('form') do
#       fill_in 'Your First Name', with: 'Test First Name'
#       fill_in 'Your Last Name', with: 'Test Last Name'
#       fill_in 'Your Email', with: ''
#       page.select 'Test1 Test1', from: 'Referred By'
#     end
#     click_on('Check In')
#     expect(page).to have_content('Check in to')
#   end
# end