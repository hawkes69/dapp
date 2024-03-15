import List from "../List";
import EffectWrapperLogic from "../Completions/EffectWrapperLogic";
import LogoEffect from "../Completions/LogoEffect";

import { useFetchAttractionsQuery } from "../../store/apis/dappApi";

function Attractions() {
  const { data, isLoading } = useFetchAttractionsQuery();

  return (
    <div>
      <EffectWrapperLogic query="experience=Attractions" animation={<LogoEffect backgroundImageSuffix="Color" overlayImageSuffix="Grayscale" />} />
      <List type="Attractions" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Attractions;
