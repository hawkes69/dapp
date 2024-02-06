class Restaurant < ApplicationRecord
  has_many :completed_restaurants
  has_many :users, through: :completed_restaurants
end
