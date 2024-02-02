import List from "../List";
import { useFetchAttractionsQuery } from "../../store/apis/dappApi";

function Attractions() {
  const { data, isLoading } = useFetchAttractionsQuery();

  return (
    <List type="Attractions" data={data} isLoading={isLoading} />
  );
}

export default Attractions;
