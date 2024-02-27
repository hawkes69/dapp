import { useState } from "react";
import List from "../List";
import EffectWrapperLogic from "../completions/EffectWrapperLogic";
import LogoEffect from "../completions/LogoEffect";
import MapEffect from "../completions/MapEffect";

import { useFetchAttractionsQuery } from "../../store/apis/dappApi";

function Attractions() {
  const { data, isLoading } = useFetchAttractionsQuery();
  const [updatedPark, setUpdatedPark] = useState("");
  const handleRowUpdate = (park) => {
    setUpdatedPark(park);
  };

  return (
    <div>
      <EffectWrapperLogic query="experience=Attractions" animation={<LogoEffect backgroundImageSuffix="Color" overlayImageSuffix="Grayscale" />} />
      <EffectWrapperLogic query={`park=${updatedPark}`} animation={<MapEffect />} />
      <List type="Attractions" data={data} isLoading={isLoading} handleRowUpdate={handleRowUpdate} />
    </div>
  );
}

export default Attractions;
