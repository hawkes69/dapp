class User < ApplicationRecord
  has_many :completed_attractions
  has_many :attractions, through: :completed_attractions

  has_many :completed_restaurants
  has_many :restaurants, through: :completed_restaurants

  has_many :completed_shows
  has_many :shows, through: :completed_shows
end
