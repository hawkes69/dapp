import List from "../List";
import EffectWrapperLogic from "../completions/EffectWrapperLogic";
import LogoEffect from "../completions/LogoEffect";
import MapEffect from "../completions/MapEffect";

import { useFetchAttractionsQuery } from "../../store/apis/dappApi";

function Attractions() {
  const { data, isLoading } = useFetchAttractionsQuery();

  return (
    <div>
      <EffectWrapperLogic query="experience=Attractions" animation={<LogoEffect backgroundImageSuffix="Color" overlayImageSuffix="Grayscale" />} />
      <EffectWrapperLogic animation={<MapEffect />} />
      <List type="Attractions" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Attractions;
