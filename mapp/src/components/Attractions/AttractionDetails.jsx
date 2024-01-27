import { useParams } from 'react-router-dom';

import { useFetchAttractionQuery } from '../../store/apis/dappApi';
function AttractionDetails() {
  const { id } = useParams();
  const { data: attraction, isLoading } = useFetchAttractionQuery(id);

  return isLoading ? (
    <div className="flex items-center justify-center h-screen">Loading...</div>
  ) : ( 
    <div>
      <h1>Attraction Details</h1>
      <div>Eventually this should show on the map were the attraction is. Or maybe we scrap this whole page idk.</div>
      <div>{attraction.id}</div>
      <div>{attraction.park}</div>
      <div>This will be map coordinates in the future.{attraction.location}</div>
      <div>{attraction.attraction_type}</div>
      <div>{attraction.completed}</div>
    </div>
  );
}

export default AttractionDetails;
