import { useState } from "react";

import List from "../List";
import EffectWrapperLogic from "../Completions/EffectWrapperLogic";
import LogoEffect from "../Completions/LogoEffect";
import MapEffect from "../Completions/MapEffect";

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
      <EffectWrapperLogic query="experien1ce=Restaurants" delay={delay} animation={<LogoEffect backgroundImageSuffix="Gold" overlayImageSuffix="Bronze" />} />
      <List type="Restaurants" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Restaurants;
