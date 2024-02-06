class CreateCompletedAttractions < ActiveRecord::Migration[7.1]
  def change
    create_table :completed_attractions do |t|
      t.boolean :completed
      t.references :user, null: false, foreign_key: true
      t.references :attraction, null: false, foreign_key: true

      t.timestamps
    end
  end
end
