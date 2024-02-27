import { useState } from "react";
import List from "../List";
import EffectWrapperLogic from "../completions/EffectWrapperLogic";
import LogoEffect from "../completions/LogoEffect";
import MapEffect from "../completions/MapEffect";

import { useFetchShowsQuery } from "../../store/apis/dappApi";

function Shows() {
  const { data, isLoading } = useFetchShowsQuery();
  const [updatedPark, setUpdatedPark] = useState("");
  const handleRowUpdate = (park) => {
    setUpdatedPark(park);
  };

  return (
    <div>
      <EffectWrapperLogic query="experience=Shows" animation={<LogoEffect backgroundImageSuffix="Bronze" overlayImageSuffix="Color" />} />
      <EffectWrapperLogic query={`park=${updatedPark}`} animation={<MapEffect />} />
      <List type="Shows" data={data} isLoading={isLoading} handleRowUpdate={handleRowUpdate} />
    </div>
  );
}

export default Shows;
