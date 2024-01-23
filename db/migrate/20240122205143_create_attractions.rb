class CreateAttractions < ActiveRecord::Migration[7.1]
  def change
    create_table :attractions do |t|
      t.string :name
      t.string :park
      t.string :location
      t.string :type
      t.boolean :completed

      t.timestamps
    end
  end
end
