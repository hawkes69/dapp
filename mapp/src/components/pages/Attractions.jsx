
import List from "../List";
import LogoEffectLogic from "../completions/LogoEffectWrapperLogic";

import { useFetchAttractionsQuery } from "../../store/apis/dappApi";

function Attractions() {
  const { data, isLoading } = useFetchAttractionsQuery();

  return (
    <div>
      <LogoEffectLogic experience="Attractions" backgroundImageSuffix="Color" overlayImageSuffix="Grayscale" />
      <List type="Attractions" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Attractions;
