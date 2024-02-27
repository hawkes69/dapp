import { useState } from "react";

import PropTypes from 'prop-types';
import { toCamelCase } from "~/constants.js";

import IMAGES from "../images/Images";

import { useFetchCompletedAreasQuery, useFetchParkCompletionQuery } from "../store/apis/dappApi";

function Map({ park }) {
  const { data: parkCompletion, isLoading: parkCompletionLoading } = useFetchParkCompletionQuery(park);
  const { data: areas, isLoading: areasLoading } = useFetchCompletedAreasQuery(park);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  let numImages = 0;

  const handleLoad = () => {
    numImages++;
    if (numImages == areas.length + 2 && parkCompletion.park_completion != 100) {
      setImagesLoaded(true);
      numImages = 0;
    } else if(numImages == 2 && parkCompletion.park_completion == 100) {
      setImagesLoaded(true);
      numImages = 0;
    }
  }

  return (!parkCompletionLoading && !areasLoading) && (
    <div className="flex flex-col items-center" style={{ marginTop: "-1px"}}>
      {!imagesLoaded && (
        <div className="flex items-center justify-center h-screen w-full skeleton-box z-40" style={{ position: "absolute" }}>
          <div className="flex justify-center items-center h-full text-white z-40">Loading...</div>
        </div>
      )}
      <h1 className="text-3xl font-bold z-30 absolute pt-4 text-white drop-shadow-[0_10px_10px_rgba(0,0,0)]">{park}</h1>
      <img className="z-20" src={IMAGES[`${toCamelCase(park)}Lines`]} onLoad={handleLoad} />
      {parkCompletion.park_completion != 100 ? (
        <>
          {areas.map((area, index) => {
            return (
              <div key={index} className="absolute z-10">
                <img src={IMAGES[toCamelCase(area)]} onLoad={handleLoad}/>
              </div>
            )
          })}
          <img className="z-0 absolute" src={IMAGES.mapBackground} onLoad={handleLoad} />
        </>
        ) : (
          <img className="z-10 absolute" src={IMAGES[`${toCamelCase(park)}Map`]} onLoad={handleLoad} />
        )
      }
    </div>
  )
}

export default Map;

Map.propTypes = {
  park: PropTypes.string.isRequired,
};