class ChangeColumnName < ActiveRecord::Migration[7.1]
  def change
    rename_column :attractions, :ride_type, :attraction_type
  end
end
