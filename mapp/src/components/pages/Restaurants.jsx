import { useState } from "react";

import List from "../List";
import EffectWrapperLogic from "../completions/EffectWrapperLogic";
import LogoEffect from "../completions/LogoEffect";
import MapEffect from "../completions/MapEffect";

import { useFetchRestaurantsQuery } from "../../store/apis/dappApi";

function Restaurants() {
  const { data, isLoading } = useFetchRestaurantsQuery();
  const [delay, setDelay] = useState(false);

  const animationPlayed = () => {
    setDelay(true);
  };

  return (
    <div>
      <EffectWrapperLogic animation={<MapEffect />} animationPlayed={animationPlayed} delay={false} />
      <EffectWrapperLogic query="experience=Restaurants" delay={delay} animation={<LogoEffect backgroundImageSuffix="Gold" overlayImageSuffix="Bronze" />} />
      <List type="Restaurants" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Restaurants;
