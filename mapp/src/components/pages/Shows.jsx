import List from "../List";
import EffectWrapperLogic from "../Completions/EffectWrapperLogic";
import LogoEffect from "../Completions/LogoEffect";

import { useFetchShowsQuery } from "../../store/apis/dappApi";

function Shows() {
  const { data, isLoading } = useFetchShowsQuery();

  return (
    <div>
      <EffectWrapperLogic query="experience=Shows" animation={<LogoEffect backgroundImageSuffix="Bronze" overlayImageSuffix="Color" />} />
      <List type="Shows" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Shows;
