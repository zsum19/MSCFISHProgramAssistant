class CreateAnnouncements < ActiveRecord::Migration[6.1]
  def change
    create_table :announcements do |t|
      t.references "member", foreign_key: { to_table: :members }, index: true
      t.references "event", foreign_key: { to_table: :events }, index: true
      t.string "title", null: false
      t.text "content", null: false
      t.boolean "external", default: false

      t.timestamps
    end
  end
end
