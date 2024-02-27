import { useState } from "react";
import List from "../List";
import LogoEffectLogic from "../completions/LogoEffectWrapperLogic";
import MapEffectWrapperLogic from "../completions/MapEffectWrapperLogic";

import { useFetchRestaurantsQuery } from "../../store/apis/dappApi";

function Restaurants() {
  const { data, isLoading } = useFetchRestaurantsQuery();
  const [updatedPark, setUpdatedPark] = useState("");
  const handleRowUpdate = (park) => {
    setUpdatedPark(park);
  };

  return (
    <div>
      <LogoEffectLogic experience="Restaurants" backgroundImageSuffix="Gold" overlayImageSuffix="Bronze" />
      <List type="Restaurants" data={data} isLoading={isLoading} handleRowUpdate={handleRowUpdate} />
      <MapEffectWrapperLogic park={updatedPark} />
    </div>
  );
}

export default Restaurants;
