# frozen_string_literal: true

class HomepageController < ApplicationController
  def index

    respond_to do |format|
      format.html
      format.zip do
        @announcements = Announcement.all
        @events = Event.all
        @attendees = Attendee.all
        @members = Member.all
        @roles = Role.all
        @eventattendances = Eventattendance.all
        @referrals = Referral.all

        objects = [@announcements, @events, @attendees, @members, @roles, @eventattendances, @referrals]
        filenames = ['announcements.csv', 'events.csv', 'attendees.csv', 'members.csv',
                     'roles.csv', 'eventattendances.csv', 'referrals.csv']

        zipname = 'public/database_dump.zip'
        File.delete(zipname) if File.exist?(zipname)

        Zip::File.open(zipname, Zip::File::CREATE) do |zipfile|
          objects.count.times do |i|
            file = File.open(filenames[i], 'w')
            File.write(filenames[i], objects[i].to_csv)
            file.close
            zipfile.add(filenames[i], file)
          end
        end

        File.open(zipname, 'r') do |f|
          send_data f.read
        end

        filenames.each do |filename|
          File.delete(filename)
        end
      end
    end
  end
end
