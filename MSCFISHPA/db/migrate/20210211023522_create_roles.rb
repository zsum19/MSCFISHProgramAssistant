class CreateRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :roles do |t|
      t.string :name, index: { unique: true }
      t.text :description

      t.timestamps
    end
  end
end
