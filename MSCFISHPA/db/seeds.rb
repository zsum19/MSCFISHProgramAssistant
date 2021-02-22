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
        max_size: 10,
        tickets_sold: i,
        num_checked_in: i*2,
        date: DateTime.current.to_date,
        description: "This is a test"
    )
end