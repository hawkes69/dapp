import List from "../List";
import EffectWrapperLogic from "../Completions/EffectWrapperLogic";
import LogoEffect from "../Completions/LogoEffect";

import { useFetchRestaurantsQuery } from "../../store/apis/dappApi";

function Restaurants() {
  const { data, isLoading } = useFetchRestaurantsQuery();

  return (
    <div>
      <EffectWrapperLogic query="experien1ce=Restaurants" animation={<LogoEffect backgroundImageSuffix="Gold" overlayImageSuffix="Bronze" />} />
      <List type="Restaurants" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Restaurants;
