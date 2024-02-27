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
    if (areas.includes(humanReadable(file))) {
      park =  key;
    }
  }
  const { data, isLoading } = useFetchAnimationCheckListQuery(`park=${park}`);
  
  return (
    isLoading ? (
      <div className="flex items-center justify-center h-screen w-full skeleton-box z-40" style={{ position: "absolute" }}>
        <div className="flex justify-center items-center h-full text-white z-40">Loading...</div>
      </div>
    ) : (
      <div className="fixed flex h-full w-full justify-center items-center" style={{marginTop: "-72px", backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
        <div className="w-72 relative" style={{height: "28rem"}}>
          <img className="absolute z-20 rounded-2xl" src={IMAGES[`${toCamelCase(park)}Lines`]} />
          <>
            {data.map((area, index) => {
              return (
                <>
                  {area === humanReadable(file) && (
                    <div className="w-full h-full rounded-2xl map-shimmer z-40" />
                  )}
                  <div key={index} className="absolute z-10">
                    {area === humanReadable(file) ? (
                      <>
                        <div>{play()}</div>
                        <div className="rounded-2xl map-flash" />
                        <img className="rounded-2xl map-animation" src={IMAGES[file]} />
                      </>
                    ) : (
                      <img className="rounded-2xl" src={IMAGES[toCamelCase(area)]}/>
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