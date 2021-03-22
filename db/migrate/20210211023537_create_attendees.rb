class CreateAttendees < ActiveRecord::Migration[6.1]
  def change
    create_table :attendees do |t|
      t.string "name", null: false
      t.string :email, index: { unique: true }, null: false

      t.timestamps
    end
  end
end
