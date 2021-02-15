class CreateReferrals < ActiveRecord::Migration[6.1]
  def change
    create_table :referrals do |t|
      t.belongs_to :member
      t.belongs_to :attendee

      t.timestamps
    end
  end
end
