# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 9.times do |i|
#   Event.create(
#     name: "Test Event #{i+1}",
#     location: "Zoom",
#     event_type: "Service",
#     max_size: 10,
#     tickets_sold: i,
#     num_checked_in: i*2,
#     date: DateTime.current.to_date,
#     description: "This is a test"
#   )
# end

Role.create!(
    name: "Chair",
    description: "Advisor/Chair/Vice Chair positions: Director permissions as well as adding/removing members"
  )

Role.create!(
  name: "Director",
  description: "Executive/Assistant Director positions: Making announcements/events as well as downloading database information"
)

Role.create!(
    name: "Member",
    description: "General Members: Viewing personal information and internal announcements"
  )

# 9.times do |i|
#   Member.create!(
#     role_id: 3,
#     first_name: "Test#{i+1}",
#     last_name: "Test#{i+1}",
#     email: "test#{i+1}@test.com",
#     num_referrals: 0
#   )
# end

Member.create!(
  role_id: 1,
  first_name: "Reo",
  last_name: "Matsuda",
  email: "reo.matsuda@gmail.com",
  num_referrals: 0
)

Member.create!(
  role_id: 1,
  first_name: "Trey",
  last_name: "Dinges",
  email: "treydinges@tamu.edu",
  num_referrals: 0
)

Member.create!(
  role_id: 1,
  first_name: "Michael",
  last_name: "Gallegos",
  email: "snowspeeder@tamu.edu",
  num_referrals: 0
)

Member.create!(
  role_id: 1,
  first_name: "Zachary",
  last_name: "Summers",
  email: "zsum19@tamu.edu",
  num_referrals: 0
)

Member.create!(
  role_id: 1,
  first_name: "Nicholas",
  last_name: "Belovoskey",
  email: "nhb368@tamu.edu",
  num_referrals: 0
)

Member.create!(
  role_id: 1,
  first_name: "Jaclyn",
  last_name: "Carpenter",
  email: "jcarpenter@msc.tamu.edu",
  num_referrals: 0
)

# 9.times do |i|
#   Announcement.create!(
#     member_id: 1,
#     event_id: 1,
#     title: "Internal Test Announcement \##{i+1}",
#     content: "This is a test accoucement \##{i+1}",
#     external: false
#   )
# end

# 9.times do |i|
#   Announcement.create!(
#     member_id: 1,
#     event_id: 1,
#     title: "External Test Announcement \##{i+1}",
#     content: "This is a test accoucement \##{i+1}",
#     external: true
#   )
# end