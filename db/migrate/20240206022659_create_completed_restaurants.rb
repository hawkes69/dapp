class CreateCompletedRestaurants < ActiveRecord::Migration[7.1]
  def change
    create_table :completed_restaurants do |t|
      t.boolean :completed
      t.references :user, null: false, foreign_key: true
      t.references :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
