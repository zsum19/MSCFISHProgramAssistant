class CreateMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :members do |t|
      t.references :role, foreign_key: { to_table: :roles }, index: true
      t.string :name
      t.integer :num_referrals

      t.timestamps
    end
  end
end
