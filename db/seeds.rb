# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

9.times do |i|
  Event.create(
    name: "Test Event #{i+1}",
    location: "Zoom",
    event_type: "Service",
    max_size: 10,
    tickets_sold: i,
    num_checked_in: i*2,
    date: DateTime.current.to_date,
    description: "This is a test"
  )
end

2.times do |i|
  Role.create!(
    name: "Test #{i+1}",
    description: "Just a test role"
  )
end

9.times do |i|
  Member.create!(
    role_id: 1,
    name: "Test #{i+1}",
    email: "test#{i+1}@test.com",
    num_referrals: 0
  )
end

9.times do |i|
  Announcement.create!(
    author_id: 1,
    event_id: 1,
    title: "Test Announcement \##{i+1}",
    content: "This is a test accoucement \##{i+1}",
    external: false
  )
end