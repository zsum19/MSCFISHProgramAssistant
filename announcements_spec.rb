require 'rails_helper'

class AnnouncementsPage
    include Capybara::DSL
    def visit_announcementspage
        visit('/announcements')
    end
end

feature "Visit announcements page" do
    let(:announcementspage) {AnnouncementsPage.new}
    scenario "Able to open announcements page", :js => true do
        announcementspage.visit_announcementspage
        expect(page).to have_content("MSC Fish Announcements")
    end
end

feature "New announcement link" do
    let(:announcementspage) {AnnouncementsPage.new}
    scenario "Able to open link to create new announcement", :js => true do
        announcementspage.visit_announcementspage
        expect(page).to have_link(nil, :href=>'/announcement')
    end
end

feature "Back to home link" do
    let(:announcementspage) {AnnouncementsPage.new}
    scenario "Able to go back home from announcement page", :js => true do
        announcementspage.visit_announcementspage
        expect(page).to have_link('Home', :href=>'/')
    end
end

# Test the new announcement page
feature "Visit new announcement page" do
    let(:announcementspage) {AnnouncementsPage.new}
    scenario "Able to open new announcement page", :js => true do
        announcementspage.visit_announcementspage
        click_link('Create New Announcement')
        expect(page).to have_content("Create a New announcement")
    end
end

# feature "New announcement form" do
#     let(:announcementspage) {AnnouncementsPage.new}
#     scenario "Form on new announcements page is working correctly", :js => true do
#         announcementspage.visit_announcementspage
#         click_link('Create New Announcement')
#         expect(page).to have_css('form')
#         within("form") do
#             fill_in 'Announcement name', with: 'Test announcement 10'
#             fill_in 'Max Size', with: '123456'
#             fill_in 'Tickets Sold', with: '5'
#             fill_in 'Number of People Checked In', with: '1'
#             fill_in 'Date of Announcement', with: '2021-01-01'
#             fill_in 'Announcement Description', with: 'This is a test announcement'
#         end
#         click_on('Create Announcement')
#     end
# end

feature "Back to all announcements link" do
    let(:announcementspage) {AnnouncementsPage.new}
    scenario "Back to all announcements link on new announcement page", :js => true do
        announcementspage.visit_announcementspage
        click_link('Create New Announcement')
        expect(page).to have_link('Back to All Announcements', :href=>'/announcements')
    end
end

# Test the cards
feature "Card (view announcement link)" do
    let(:announcementspage) {AnnouncementsPage.new}
    scenario "Able to view announcement details if there is an announcement created", :js => true do
        announcementspage.visit_announcementspage
        page.all('View Announcement').each do |f|
            click_on(f)
            expect(page).to have_content("Max Size")
            expect(page).to have_content("Announcement Description")
            expect(page).to have_button("Delete Announcement")
        end
    end
end
