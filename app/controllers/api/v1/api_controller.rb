class Api::V1::ApiController < ApplicationController
  PARK_AREAS = {
    "Universal Studios" => ["Minion Land", "New York", "Production Central", "San Francisco", "Diagon Alley", "World Expo", "Woody Woodpecker's KidZone"],
    "Islands Of Adventure" => ["Superhero Island", "Toon Lagoon", "Hogsmede", "Jurassic Park", "Seuss Landing", "Lost Continent"],
    "Epcot" => ["World Celebration", "World Discovery", "World Nature", "World Showcase"],
    "Magic Kingdom" => ["Main Street, U.S.A.", "Adventureland", "Frontierland", "Liberty Square", "Fantasyland", "Tomorrowland"],
    "Hollywood Studios" => ["Hollywood Boulevard", "Muppet Courtyard", "Echo Lake", "Toy Story Land", "Galaxy's Edge", "Animation Courtyard", "Sunset Boulevard"],
    "Animal Kingdom" => ["Discovery Island", "Pandora", "Africa", "Asia", "DinoLand U.S.A."]
  }

  def date_generator
    park = available_parks.sample

    render json: {
      park: park,
      attraction: random_experience(Attraction, park),
      show: random_experience(Show, park),
      restaurant: random_experience(Restaurant, park),
    }
  end

  def completed
    park = params[:park]

    area_percentages = []

    PARK_AREAS[park].each do |area|
      area_percentages << [area, completion_percentage(nil, area)]
    end
  
    render json: {
      park_completion: completion_percentage(park, nil),
      area_percentages: area_percentages
    }
  end
  
  private

  def available_parks
    available_parks = PARK_AREAS.keys.reject do |park|
      experience_type_completed?(Attraction, park) ||
        experience_type_completed?(Show, park) ||
        experience_type_completed?(Restaurant, park)
    end
  end
  
  def completion_percentage(park, area)
    if park.present?
      completed_experiences = completed_experiences_by_park(park)
      total_experiences = total_experiences_by_park(park)
    elsif area.present?
      completed_experiences = completed_experiences_by_area(area)
      total_experiences = total_experiences_by_area(area)
    end
  
    (completed_experiences / total_experiences.to_f * 100).floor
  end
  
  def completed_experiences_by_park(park)
    Attraction.where(park: park, completed: true).count +
    Show.where(park: park, completed: true).count +
    Restaurant.where(park: park, completed: true).count
  end

  def experience_type_completed?(experience_type, park)
    return true if experience_type.where(park: park, completed: false).count == 0
  end
  
  def total_experiences_by_park(park)
    Attraction.where(park: park).count +
    Show.where(park: park).count +
    Restaurant.where(park: park).count
  end
  
  def completed_experiences_by_area(area)
    Attraction.where(area: area, completed: true).count +
    Show.where(area: area, completed: true).count +
    Restaurant.where(area: area, completed: true).count
  end
  
  def total_experiences_by_area(area)
    Attraction.where(area: area).count +
    Show.where(area: area).count +
    Restaurant.where(area: area).count
  end

  def random_experience(experience_type, park)
    experience_type.where(park: park, completed: false).sample
  end
end
