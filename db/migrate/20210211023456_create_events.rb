class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string "name", null: false
      t.string "location"
      t.string "event_type"
      t.integer "max_size", null: false
      t.integer "tickets_sold", null: false, default: 0
      t.integer "num_checked_in", null: false, default: 0
      t.timestamp "date"
      t.text "description"

      t.timestamps
    end
  end
end
