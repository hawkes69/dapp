import PropTypes from 'prop-types';

import IMAGES from "../images/Images";
import { PARK_AREAS } from "../constants";

import { useFetchAttractionsQuery, useFetchShowsQuery, useFetchRestaurantsQuery } from "../store/apis/dappApi";

function toCamelCase(text) {
  const textWithoutPunctuation = text.replace(/[^\w\s]/g, ''); // Needed for main street but good to have
  return textWithoutPunctuation.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function Map({ park }) {
  const areas = PARK_AREAS[park];
  const { data: attractions, isLoading: attractionsLoading } = useFetchAttractionsQuery();
  const { data: shows, isLoading: showsLoading } = useFetchShowsQuery();
  const { data: restaurants, isLoading: restaurantsLoading } = useFetchRestaurantsQuery();

  const totalCompletion = () => {
    const attractionsTotal = attractions.filter(attraction => attraction.completed && attraction.park === park);
    const showsTotal = shows.filter(show => show.completed && show.park === park);
    const restaurantsTotal = restaurants.filter(restaurant => restaurant.completed && restaurant.park === park);
    
    const total = attractionsTotal.length + showsTotal.length + restaurantsTotal.length;
    const totalCompletion = (total / (attractions.length + shows.length + restaurants.length)) * 100;
    return totalCompletion;
  };

  const areaCompletion = (area) => {
    const attractionsTotal = attractions.filter(attraction => attraction.completed && attraction.area === area).length;
    const showsTotal = shows.filter(show => show.completed && show.area === area).length;
    const restaurantsTotal = restaurants.filter(restaurant => restaurant.completed && restaurant.area === area).length;

    const completedAttractionsTotal = attractions.filter(attraction => attraction.area === area).length;
    const completedShowsTotal = shows.filter(show => show.area === area).length;
    const completedRestaurantsTotal = restaurants.filter(restaurant => restaurant.area === area).length;
    
    const totalCompletion = attractionsTotal + showsTotal + restaurantsTotal;
    const total = completedAttractionsTotal + completedShowsTotal + completedRestaurantsTotal;

    return (total / totalCompletion) * 100;
  };

  return (
    restaurantsLoading || showsLoading || attractionsLoading ? (
      <div className="flex items-center justify-center h-screen">Loading...</div>
    ) : (
      <div className="flex flex-col items-center" style={{ marginTop: "-1px"}}>
        <h1 className="text-3xl font-bold z-30 absolute pt-4 text-white drop-shadow-[0_10px_10px_rgba(0,0,0)]">{park}</h1>
        <img className="z-20" src={IMAGES[`${toCamelCase(park)}Lines`]} />
        {totalCompletion() != 100 ? (
          <>
            {areas.map((area, index) => (
              areaCompletion(area) == 100 && (
                <div key={index} className="absolute z-10">
                  <img src={IMAGES[toCamelCase(area)]} />
                </div>
              )
            ))}
            <img className="z-0 absolute" src={IMAGES.mapBackground} />
          </>
          ) : (
            <img className="z-10 absolute" src={IMAGES[`${toCamelCase(park)}Map`]} />
          )
        }
      </div>
    )
  );
}

export default Map;

Map.propTypes = {
  park: PropTypes.string.isRequired,
};