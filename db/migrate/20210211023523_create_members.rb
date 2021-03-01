class CreateMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :members do |t|
      t.references :role, foreign_key: { to_table: :roles }, index: true
      t.string "name", null: false
      t.integer "num_referrals", null: false, default: 0

      t.timestamps
    end
  end
end
