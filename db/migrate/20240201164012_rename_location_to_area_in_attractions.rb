class RenameLocationToAreaInAttractions < ActiveRecord::Migration[7.1]
  def change
    rename_column :attractions, :location, :area
  end
end
