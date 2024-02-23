import PropTypes from 'prop-types';

import IMAGES from "../images/Images";

import { useFetchCompletedAreasQuery, useFetchParkCompletionQuery } from "../store/apis/dappApi";

function toCamelCase(text) {
  const textWithoutPunctuation = text.replace(/[^\w\s]/g, ''); // Needed for main street but good to have
  return textWithoutPunctuation.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function Map({ park }) {
  const { data: parkCompletion, isLoading: parkCompletionLoading } = useFetchParkCompletionQuery(park);
  const { data: areas, isLoading: areasLoading } = useFetchCompletedAreasQuery(park);

  return parkCompletionLoading || areasLoading ? (
    <div className="flex items-center justify-center h-screen">Loading...</div>
  ) : (
    <div className="flex flex-col items-center" style={{ marginTop: "-1px"}}>
      <h1 className="text-3xl font-bold z-30 absolute pt-4 text-white drop-shadow-[0_10px_10px_rgba(0,0,0)]">{park}</h1>
      <img className="z-20" src={IMAGES[`${toCamelCase(park)}Lines`]} />
      {parkCompletion.park_completion != 100 ? (
        <>
          {areas.map((area, index) => {
            return (
              <div key={index} className="absolute z-10">
                <img src={IMAGES[toCamelCase(area)]} />
              </div>
            )
          })}
          <img className="z-0 absolute" src={IMAGES.mapBackground} />
        </>
        ) : (
          <img className="z-10 absolute" src={IMAGES[`${toCamelCase(park)}Map`]} />
        )
      }
    </div>
  )
}

export default Map;

Map.propTypes = {
  park: PropTypes.string.isRequired,
};