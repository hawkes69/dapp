class CreateRestaurants < ActiveRecord::Migration[7.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :park
      t.string :area
      t.boolean :completed

      t.timestamps
    end
  end
end
