class Attraction < ApplicationRecord
  has_many :completed_attractions
  has_many :users, through: :completed_attractions
end
