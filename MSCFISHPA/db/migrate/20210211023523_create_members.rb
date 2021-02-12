class CreateMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :members do |t|
      t.string :name
      t.boolean :is_admin
      t.integer :num_referrals

      t.timestamps
    end
  end
end
