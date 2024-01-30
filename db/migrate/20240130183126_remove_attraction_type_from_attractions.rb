class RemoveAttractionTypeFromAttractions < ActiveRecord::Migration[7.1]
  def change
    remove_column :attractions, :attraction_type, :string
  end
end
