import List from "../List";
import LogoEffect from "../completions/LogoEffect";
import { useFetchAttractionsQuery } from "../../store/apis/dappApi";

function Attractions() {
  const { data, isLoading } = useFetchAttractionsQuery();

  return (
    <div>
      <LogoEffect imageLinks={["epcotGrayscale", "epcotColor"]} park="epcot" />
      <List type="Attractions" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Attractions;
