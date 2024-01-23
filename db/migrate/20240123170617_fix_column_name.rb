class FixColumnName < ActiveRecord::Migration[7.1]
  def change
    rename_column :attractions, :type, :ride_type
  end
end
