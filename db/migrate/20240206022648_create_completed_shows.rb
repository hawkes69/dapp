class CreateCompletedShows < ActiveRecord::Migration[7.1]
  def change
    create_table :completed_shows do |t|
      t.boolean :completed
      t.references :user, null: false, foreign_key: true
      t.references :show, null: false, foreign_key: true

      t.timestamps
    end
  end
end
