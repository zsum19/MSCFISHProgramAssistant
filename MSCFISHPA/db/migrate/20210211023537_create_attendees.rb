class CreateAttendees < ActiveRecord::Migration[6.1]
  def change
    create_table :attendees do |t|
      t.references :referred_by, foreign_key: { to_table: :members }, index: true
      t.references :event, foreign_key: { to_table: :events }, index: true
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end
