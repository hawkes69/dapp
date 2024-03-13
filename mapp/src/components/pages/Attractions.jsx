import { useState } from "react";

import List from "../List";
import EffectWrapperLogic from "../Completions/EffectWrapperLogic";
import LogoEffect from "../Completions/LogoEffect";
import MapEffect from "../Completions/MapEffect";

import { useFetchAttractionsQuery } from "../../store/apis/dappApi";

function Attractions() {
  const { data, isLoading } = useFetchAttractionsQuery();
  const [delay, setDelay] = useState(false);

  const animationPlayed = () => {
    setDelay(true);
  };

  return (
    <div>
      {/* <EffectWrapperLogic animation={<MapEffect />} animationPlayed={animationPlayed} delay={false} /> */}
      <EffectWrapperLogic query="experience=Attractions" delay={delay} animation={<LogoEffect backgroundImageSuffix="Color" overlayImageSuffix="Grayscale" />} />
      <List type="Attractions" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Attractions;
