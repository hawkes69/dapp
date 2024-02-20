import PropTypes from 'prop-types';

import IMAGES from "../images/Images";

import { useFetchCompletedPercentageQuery } from "../store/apis/dappApi";

function toCamelCase(text) {
  const textWithoutPunctuation = text.replace(/[^\w\s]/g, ''); // Needed for main street but good to have
  return textWithoutPunctuation.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function Map({ park }) {
  const { data, isLoading } = useFetchCompletedPercentageQuery(`park=${park}`);

  if(!isLoading) {
    console.log(park)
  }

  return isLoading ? (
    <div className="flex items-center justify-center h-screen">Loading...</div>
  ) : (
    <div className="flex flex-col items-center" style={{ marginTop: "-1px"}}>
      <h1 className="text-3xl font-bold z-30 absolute pt-4 text-white drop-shadow-[0_10px_10px_rgba(0,0,0)]">{park}</h1>
      <img className="z-20" src={IMAGES[`${toCamelCase(park)}Lines`]} />
      {data.park_completion != 100 ? (
        <>
          {data.area_percentages.map(([area, percentage], index) => {
            return (
              percentage == 100 && (
                <div key={index} className="absolute z-10">
                  <img src={IMAGES[toCamelCase(area)]} />
                </div>
              )
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