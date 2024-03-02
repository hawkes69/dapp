import List from "../List";
import EffectWrapperLogic from "../completions/EffectWrapperLogic";
import LogoEffect from "../completions/LogoEffect";
import MapEffect from "../completions/MapEffect";

import { useFetchShowsQuery } from "../../store/apis/dappApi";

function Shows() {
  const { data, isLoading } = useFetchShowsQuery();

  return (
    <div>
      <EffectWrapperLogic query="experience=Shows" animation={<LogoEffect backgroundImageSuffix="Bronze" overlayImageSuffix="Color" />} />
      <EffectWrapperLogic animation={<MapEffect />} />
      <List type="Shows" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Shows;
