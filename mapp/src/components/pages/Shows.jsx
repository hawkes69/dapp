import { useState } from "react";

import List from "../List";
import EffectWrapperLogic from "../completions/EffectWrapperLogic";
import LogoEffect from "../completions/LogoEffect";
import MapEffect from "../completions/MapEffect";

import { useFetchShowsQuery } from "../../store/apis/dappApi";

function Shows() {
  const { data, isLoading } = useFetchShowsQuery();
  const [delay, setDelay] = useState(false);

  const animationPlayed = () => {
    setDelay(true);
  };

  return (
    <div>
      <EffectWrapperLogic animation={<MapEffect />} animationPlayed={animationPlayed} delay={false} />
      <EffectWrapperLogic query="experience=Shows" delay={delay} animation={<LogoEffect backgroundImageSuffix="Bronze" overlayImageSuffix="Color" />} />
      <List type="Shows" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Shows;
