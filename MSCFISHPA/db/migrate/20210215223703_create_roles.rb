class CreateRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :roles do |t|
      t.references :member, foreign_key: { to_table: :members }, index: true
      t.string :name, index: { unique: true }
      t.text :description

      t.timestamps
    end
  end
end
