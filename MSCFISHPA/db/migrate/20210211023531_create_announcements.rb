class CreateAnnouncements < ActiveRecord::Migration[6.1]
  def change
    create_table :announcements do |t|
      t.references :author, foreign_key: { to_table: :members }, index: true
      t.references :event, foreign_key: { to_table: :events }, index: true
      t.text :content
      t.timestamp :date_posted

      t.timestamps
    end
  end
end
