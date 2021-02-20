class CreateAttendees < ActiveRecord::Migration[6.1]
  def change
    create_table :attendees do |t|
      t.string :name
      t.string :email, index: { unique: true }

      t.timestamps
    end
  end
end
