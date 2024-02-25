import List from "../List";
import LogoEffectLogic from "../completions/LogoEffectWrapperLogic";

import { useFetchShowsQuery } from "../../store/apis/dappApi";

function Shows() {
  const { data, isLoading } = useFetchShowsQuery();

  return (
    <div>
      <LogoEffectLogic experience="Shows" backgroundImageSuffix="Bronze" overlayImageSuffix="Color" />
      <List type="Shows" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Shows;
