class CreateEventattendances < ActiveRecord::Migration[6.1]
  def change
    create_table :eventattendances do |t|
      t.belongs_to :event
      t.belongs_to :attendee

      t.timestamps
    end
  end
end
