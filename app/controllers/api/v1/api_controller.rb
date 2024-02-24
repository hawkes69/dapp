class Api::V1::ApiController < ApplicationController
  PARK_AREAS = {
    "Universal Studios" => ["Minion Land", "New York", "Production Central", "San Francisco", "Diagon Alley", "World Expo", "Woody Woodpecker's KidZone"],
    "Islands Of Adventure" => ["Superhero Island", "Toon Lagoon", "Hogsmede", "Jurassic Park", "Seuss Landing", "Lost Continent"],
    "Epcot" => ["World Celebration", "World Discovery", "World Nature", "World Showcase"],
    "Magic Kingdom" => ["Main Street, U.S.A.", "Adventureland", "Frontierland", "Liberty Square", "Fantasyland", "Tomorrowland"],
    "Hollywood Studios" => ["Hollywood Boulevard", "Muppet Courtyard", "Echo Lake", "Toy Story Land", "Galaxy's Edge", "Animation Courtyard", "Sunset Boulevard"],
    "Animal Kingdom" => ["Discovery Island", "Pandora", "Africa", "Asia", "DinoLand U.S.A."]
  }

  def completed_areas
    park = params[:park]

    areas = []

    PARK_AREAS[park].each do |area|
      areas << area if completion_percentage(nil, area) == 100
    end

    render json: areas
  end

  def experience_completion
    experience = params[:experience]

    case experience
    when "Attractions"
      experience = Attraction
    when "Shows"
      experience = Show
    when "Restaurants"
      experience = Restaurant
    end

    parks = PARK_AREAS.keys
    parks_experience_completion = {}

    parks.each do |park|
      parks_experience_completion[park] = experience_completed_percentage(experience, park)
    end

    render json: parks_experience_completion
  end

  def date_generator
    park = available_parks.sample

    render json: {
      park: park,
      attraction: random_experience(Attraction, park),
      show: random_experience(Show, park),
      restaurant: random_experience(Restaurant, park),
    }
  end

  def park_completion
    park = params[:park]
  
    render json: {
      park_completion: completion_percentage(park, nil),
      attraction_completion: experience_completed_percentage(Attraction, park),
      show_completion: experience_completed_percentage(Show, park),
      restaurant_completion: experience_completed_percentage(Restaurant, park),
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

  def experience_completed_percentage(experience_type, park)
    pp experience_type.where(completed: true, park: park).count
    pp experience_type.where(park: park).count.to_f * 100
    experience_type.where(completed: true, park: park).count / experience_type.where(park: park).count.to_f * 100
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
