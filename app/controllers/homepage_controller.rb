class HomepageController < ApplicationController
  def index
    @announcements = Announcement.all
    @events = Event.all
    @attendees = Attendee.all
    @members = Member.all
    @roles = Role.all
    @eventattendances = Eventattendance.all
    @referrals = Referral.all

    respond_to do |format|
      format.html
      format.zip { 
        filenames = ['announcements.csv', 'events.csv', 'attendees.csv', 'members.csv', 'roles.csv', 'eventattendances.csv', 'referral.csv']

        zipname = "tmp/database_dump.zip"
        File.delete(zipname) if File.exists?(zipname)
        zip = File.open(zipname, "w")

        Zip::File.open(zipname, Zip::File::CREATE) do |zipfile|
          file = File.open(filenames[0], "w")
          File.write(filenames[0], @announcements.to_csv)
          file.close
          zipfile.add(filenames[0], file)

          file = File.open(filenames[1], "w")
          File.write(filenames[1], @events.to_csv)
          file.close
          zipfile.add(filenames[1], file)

          file = File.open(filenames[2], "w")
          File.write(filenames[2], @attendees.to_csv)
          file.close
          zipfile.add(filenames[2], file)

          file = File.open(filenames[3], "w")
          File.write(filenames[3], @members.to_csv)
          file.close
          zipfile.add(filenames[3], file)

          file = File.open(filenames[4], "w")
          File.write(filenames[4], @roles.to_csv)
          file.close
          zipfile.add(filenames[4], file)

          file = File.open(filenames[5], "w")
          File.write(filenames[5], @eventattendances.to_csv)
          file.close
          zipfile.add(filenames[5], file)

          file = File.open(filenames[6], "w")
          File.write(filenames[6], @referrals.to_csv)
          file.close
          zipfile.add(filenames[6], file)
        end

        send_file zipname
        zip.close
        filenames.each do |filename|
          File.delete(filename)
        end
      }
    end
  end
end
