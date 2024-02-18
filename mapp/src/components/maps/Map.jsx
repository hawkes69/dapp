import IMAGES from "../../images/Images";
import { PARK_AREAS } from "../../constants";

function Map({ park }) {

  const areas = PARK_AREAS["Epcot"];
  debugger

  return (
    <div className="flex flex-col items-center p-4">
      {areas.map((area, index) => (
        <div key={index} className="flex flex-col items-center gap-4">
          <h2>{area}</h2>
          <img src={IMAGES[area]} />
        </div>
      ))}
    </div>
  );
}

export default Map;
