class Show < ApplicationRecord
  has_many :completed_shows
  has_many :users, through: :completed_shows
end
