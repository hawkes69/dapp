import IMAGES from "../images/Images";

function Map() {
  return (
    <div className="flex flex-col items-center p-4">
      <h2>Map</h2>
      <img src={IMAGES.oops} alt="this is an phatty doggy yar" />
      <img src={IMAGES.phatso} alt="this is an phatty doggy yar" />
    </div>
  );
}

export default Map;
