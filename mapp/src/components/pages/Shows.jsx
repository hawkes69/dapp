import List from "../List";
import { useFetchShowsQuery } from "../../store/apis/dappApi";

function Shows() {
  const { data, isLoading } = useFetchShowsQuery();

  return (
    <List type="Shows" data={data} isLoading={isLoading} />
  );
}

export default Shows;
