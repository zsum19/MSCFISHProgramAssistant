# frozen_string_literal: true

require 'rubygems'
require 'zip'

class HomepageController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.zip do
        unless current_member
          current_directory = Dir.pwd
          zipname = "#{current_directory}/public/downloads/you_should_not_have_this.zip"
          File.delete(zipname) if File.exist?(zipname)

          ::Zip::File.open(zipname, ::Zip::File::CREATE) do |zipfile|
            file = File.open('README.txt', 'w')
            File.write('README.txt', 'SECURITY BREACH')
            file.close
            zipfile.add('README.txt', file)
          end

          send_file zipname
          return
        end

        @announcements = Announcement.all
        @events = Event.all
        @attendees = Attendee.all
        @members = Member.all
        @roles = Role.all
        @eventattendances = Eventattendance.all
        @referrals = Referral.all

        objects = [@announcements, @events, @attendees, @members, @roles, @eventattendances,
                   @referrals]
        filenames = ['announcements.csv', 'events.csv', 'attendees.csv', 'members.csv',
                     'roles.csv', 'eventattendances.csv', 'referrals.csv']

        current_directory = Dir.pwd
        zipname = "#{current_directory}/public/downloads/database_dump.zip"
        File.delete(zipname) if File.exist?(zipname)

        ::Zip::File.open(zipname, ::Zip::File::CREATE) do |zipfile|
          objects.count.times do |i|
            file = File.open(filenames[i], 'w')
            File.write(filenames[i], objects[i].to_csv)
            file.close
            zipfile.add(filenames[i], file)
          end
        end

        send_file zipname

        filenames.each do |filename|
          File.delete(filename)
        end
      end
    end
  end
end
