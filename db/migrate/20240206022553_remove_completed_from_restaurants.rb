class RemoveCompletedFromRestaurants < ActiveRecord::Migration[7.1]
  def change
    remove_column :restaurants, :completed, :boolean
  end
end
