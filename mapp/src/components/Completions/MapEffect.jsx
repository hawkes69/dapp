import PropTypes from "prop-types";

import IMAGES from "~/images/Images";
import { PARK_AREAS, toCamelCase, humanReadable } from "~/constants.js";
import { useFetchAnimationCheckListQuery } from "~/store";
import useSound from 'use-sound';
import map from "~/sounds/map.mp3";

function MapEffect({ file }) {
  let park = "";
  const [play] = useSound(map);
  for (const [key, areas] of Object.entries(PARK_AREAS)) {
    if (areas.includes(file)) {
      park =  key;
    }
  }
  const { data, isLoading } = useFetchAnimationCheckListQuery();
  
  return (
    isLoading && file != null ? (
      <div className="flex items-center justify-center h-screen w-full skeleton-box z-40" style={{ position: "absolute" }}>
        <div className="flex justify-center items-center h-full text-white z-40">Loading...</div>
      </div>
    ) : (
      <div className="fixed flex h-full w-full justify-center items-center z-10" style={{marginTop: "-72px", backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
        <div className="w-72 relative" style={{height: "28rem"}}>
          <img className="absolute z-50 rounded-2xl" src={IMAGES[`${toCamelCase(park)}Lines`]} />
          <>
            {data.map((area, index) => {
              return (
                <>
                  <div key={index} className="absolute">
                    {area === file ? (
                      <>
                        <div className="w-full h-full relative rounded-2xl map-shimmer z-30" />
                        {/* <div>{play()}</div> */}
                        <img className="rounded-2xl z-10 relative map-animation" src={IMAGES[toCamelCase(file)]} />
                        <div className="rounded-2xl relative map-flash z-10" />
                      </>
                    ) : (
                      <img className="rounded-2xl z-20 relative" src={IMAGES[toCamelCase(area)]}/>
                    )}
                  </div>
                </>
              )
            })}
          </>
          <img className="absolute z-0 rounded-2xl" src={IMAGES["mapBackground"]} />
        </div>
      </div>
    )
  )
}

export default MapEffect;

MapEffect.propTypes = {
  file: PropTypes.string,
};