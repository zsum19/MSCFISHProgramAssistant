# frozen_string_literal: true
require 'rubygems'
require 'zip'

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

<<<<<<< HEAD
        zipname = 'public/downloads/database_dump.zip'
=======
        current_directory = Dir.pwd
        zipname = current_directory + '/public/downloads/database_dump.zip'
>>>>>>> origin
        File.delete(zipname) if File.exist?(zipname)

        ::Zip::File.open(zipname, ::Zip::File::CREATE) do |zipfile|
          objects.count.times do |i|
            file = File.open('public/' + filenames[i], 'w')
            File.write('public/' + filenames[i], objects[i].to_csv)
            file.close
            zipfile.add('public/' + filenames[i], file)
          end
        end

        send_file zipname

        filenames.each do |filename|
          File.delete('public/' + filename)
        end
      end
    end
  end
end
