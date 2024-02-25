import List from "../List";
import LogoEffectLogic from "../completions/LogoEffectWrapperLogic";

import { useFetchRestaurantsQuery } from "../../store/apis/dappApi";

function Restaurants() {
  const { data, isLoading } = useFetchRestaurantsQuery();

  return (
    <div>
      <LogoEffectLogic experience="Restaurants" backgroundImageSuffix="Gold" overlayImageSuffix="Bronze" />
      <List type="Restaurants" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Restaurants;
