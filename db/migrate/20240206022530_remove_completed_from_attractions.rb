class RemoveCompletedFromAttractions < ActiveRecord::Migration[7.1]
  def change
    remove_column :attractions, :completed, :boolean
  end
end
