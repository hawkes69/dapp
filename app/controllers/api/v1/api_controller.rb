class Api::V1::ApiController < ApplicationController
  PARK_AREAS = {
    "Universal Studios" => ["Minion Land", "New York", "Production Central", "San Francisco", "Diagon Alley", "World Expo", "Woody Woodpecker's KidZone"],
    "Islands Of Adventure" => ["Superhero Island", "Toon Lagoon", "Hogsmede", "Jurassic Park", "Seuss Landing", "Lost Continent"],
    "Epcot" => ["World Celebration", "World Discovery", "World Nature", "World Showcase"],
    "Magic Kingdom" => ["Main Street, U.S.A.", "Adventureland", "Frontierland", "Liberty Square", "Fantasyland", "Tomorrowland"],
    "Hollywood Studios" => ["Hollywood Boulevard", "Muppet Courtyard", "Echo Lake", "Toy Story Land", "Galaxy's Edge", "Animation Courtyard", "Sunset Boulevard"],
    "Animal Kingdom" => ["Discovery Island", "Pandora", "Africa", "Asia", "DinoLand U.S.A."],
    "SeaWorld" => [],
    "Disneyland" => [],
    "California Adventure" => [],
  }

  def animation_check_list
    experience = params[:experience]

    if experience.present?
      experience_completion
    else
      completed_areas
    end
  end

  def completed_areas
    park = params[:park]
    areas = []

    if park.present?
      PARK_AREAS[park].each do |area|
        areas << area if completion_percentage(nil, area) == 100
      end
    else
      PARK_AREAS.each_value do |park_areas|
        park_areas.each do |area|
          areas << area if completion_percentage(nil, area) == 100
        end
      end
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

    render json: parks_experience_completion.select { |key, value| value == 100 }.keys
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
      experience_type_completed?(Attraction, park) &&
        experience_type_completed?(Show, park) &&
        experience_type_completed?(Restaurant, park)
    end
  end

  def experience_completed_percentage(experience_type, park)
    total_count = experience_type.where(park: park).count
    return 0 if total_count.zero? # Return 0 if there are no experiences for the park
  
    completed_count = experience_type.where(completed: true, park: park).count
    (completed_count / total_count.to_f * 100).round(2)
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
    if experience_type.where(park: park, completed: false).empty?
      { name: "All #{experience_type.to_s.downcase}s are completed in #{park}." }
    else
      experience_type.where(park: park, completed: false).sample
    end
  end
end
