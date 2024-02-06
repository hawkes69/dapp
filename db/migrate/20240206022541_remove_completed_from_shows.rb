class RemoveCompletedFromShows < ActiveRecord::Migration[7.1]
  def change
    remove_column :shows, :completed, :boolean
  end
end
