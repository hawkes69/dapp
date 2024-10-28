export const API_URL = import.meta.env.VITE_API_URL;

export const PARK_AREAS = {
  "Universal Studios": ["Minion Land", "New York", "Production Central", "San Francisco", "Diagon Alley", "World Expo", "Woody Woodpecker's KidZone"],
  "Islands Of Adventure": ["Superhero Island", "Toon Lagoon", "Hogsmede", "Jurassic Park", "Seuss Landing", "Lost Continent"],
  "Epcot": ["World Celebration", "World Discovery", "World Nature", "World Showcase"],
  "Magic Kingdom": ["Main Street, U.S.A.", "Adventureland", "Frontierland", "Liberty Square", "Fantasyland", "Tomorrowland"],
  "Hollywood Studios": ["Hollywood Boulevard", "Muppet Courtyard", "Echo Lake", "Toy Story Land", "Galaxy's Edge", "Animation Courtyard", "Sunset Boulevard"],
  "Animal Kingdom": ["Discovery Island", "Pandora", "Africa", "Asia", "DinoLand U.S.A."],
  "Sea World": [],
  "Disneyland": [],
  "California Adventure": [],
}

export function toCamelCase(text) {
  const textWithoutPunctuation = text.replace(/[^\w\s]/g, ''); // Needed for main street but good to have
  return textWithoutPunctuation.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

export function humanReadable(camelCase) {
  return camelCase.replace(/([A-Z])/g, ' $1')
              .replace(/^./, function(str){ return str.toUpperCase(); });
}