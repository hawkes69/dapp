import PropTypes from 'prop-types';

import IMAGES from "../../images/Images";
import { PARK_AREAS } from "../../constants";

function Map({ park }) {
  const areas = PARK_AREAS[park];

  console.log(areas)

  function toCamelCase(text) {
    const textWithoutPunctuation = text.replace(/[^\w\s]/g, ''); // Needed for main street but good to have
    return textWithoutPunctuation.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  return (
    <div className="flex flex-col items-center p-12">
      <img className="z-20" src={IMAGES[`${toCamelCase(park)}Lines`]} />
      {areas.map((area, index) => (
        <div key={index} className="absolute z-10">
          <img src={IMAGES[toCamelCase(area)]} />
        </div>
      ))}
      {/* {true && <img className="z-10 absolute" src={IMAGES[`${toCamelCase(park)}Map`]} />} */}
      <img className="z-0 absolute" src={IMAGES.mapBackground} />
    </div>
  );
}

export default Map;

Map.propTypes = {
  park: PropTypes.string.isRequired,
};