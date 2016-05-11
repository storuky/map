class CreateMarkers < ActiveRecord::Migration
  def change
    create_table :markers do |t|
      t.float :lat
      t.float :lng
      t.string :name
      t.string :avatar
      t.string :website
      t.string :email
      t.string :city
      t.string :address
      t.string :phone
      t.text :about

      t.timestamps null: false
    end
  end
end
