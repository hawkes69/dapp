import { useState } from "react";
import List from "../List";
import EffectWrapperLogic from "../completions/EffectWrapperLogic";
import LogoEffect from "../completions/LogoEffect";
import MapEffect from "../completions/MapEffect";

import { useFetchRestaurantsQuery } from "../../store/apis/dappApi";

function Restaurants() {
  const { data, isLoading } = useFetchRestaurantsQuery();
  const [updatedPark, setUpdatedPark] = useState("");
  const handleRowUpdate = (park) => {
    setUpdatedPark(park);
  };

  return (
    <div>
      <EffectWrapperLogic query="experience=Restaurants" animation={<LogoEffect backgroundImageSuffix="Gold" overlayImageSuffix="Bronze" />} />
      <EffectWrapperLogic query={`park=${updatedPark}`} animation={<MapEffect />} />
      <List type="Restaurants" data={data} isLoading={isLoading} handleRowUpdate={handleRowUpdate} />
    </div>
  );
}

export default Restaurants;
