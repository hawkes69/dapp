import { useState } from "react";
import List from "../List";
import LogoEffectLogic from "../completions/LogoEffectWrapperLogic";
import MapEffectWrapperLogic from "../completions/MapEffectWrapperLogic";

import { useFetchAttractionsQuery } from "../../store/apis/dappApi";

function Attractions() {
  const { data, isLoading } = useFetchAttractionsQuery();
  const [updatedPark, setUpdatedPark] = useState("");
  const handleRowUpdate = (park) => {
    setUpdatedPark(park);
  };

  return (
    <div>
      <LogoEffectLogic experience="Attractions" backgroundImageSuffix="Color" overlayImageSuffix="Grayscale" />
      <List type="Attractions" data={data} isLoading={isLoading} handleRowUpdate={handleRowUpdate} />
      <MapEffectWrapperLogic park={updatedPark} />
    </div>
  );
}

export default Attractions;
