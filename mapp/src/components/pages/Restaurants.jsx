import List from "../List";
import { useFetchRestaurantsQuery } from "../../store/apis/dappApi";

function Restaurants() {
  const { data, isLoading } = useFetchRestaurantsQuery();

  return (
    <List type="Restaurants" data={data} isLoading={isLoading} />
  );
}

export default Restaurants;
