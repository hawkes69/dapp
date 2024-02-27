import { useState } from "react";
import List from "../List";
import LogoEffectLogic from "../completions/LogoEffectWrapperLogic";
import MapEffectWrapperLogic from "../completions/MapEffectWrapperLogic";

import { useFetchShowsQuery } from "../../store/apis/dappApi";

function Shows() {
  const { data, isLoading } = useFetchShowsQuery();
  const [updatedPark, setUpdatedPark] = useState("");
  const handleRowUpdate = (park) => {
    setUpdatedPark(park);
  };

  return (
    <div>
      <LogoEffectLogic experience="Shows" backgroundImageSuffix="Bronze" overlayImageSuffix="Color" />
      <List type="Shows" data={data} isLoading={isLoading} handleRowUpdate={handleRowUpdate} />
      <MapEffectWrapperLogic park={updatedPark} />
    </div>
  );
}

export default Shows;
