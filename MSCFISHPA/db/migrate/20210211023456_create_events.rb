class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :max_size
      t.integer :tickets_sold
      t.integer :num_checked_in
      t.timestamp :date
      t.text :description

      t.timestamps
    end
  end
end
