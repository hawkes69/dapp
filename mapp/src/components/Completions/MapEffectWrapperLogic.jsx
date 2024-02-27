import { useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";

import MapEffect from "./MapEffect";

import { useFetchCompletedAreasQuery } from "../../store";

function MapEffectWrapperLogic({ park }) {
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);
  const {data, isLoading} = useFetchCompletedAreasQuery(park);
  const [completedAreas, setCompletedAreas] = useState([]);
  const [newlyCompletedArea, setNewlyCompletedArea] = useState("");
  const initialLoad = useRef(true);

  useEffect(() => {
    if (!isLoading && !initialLoad.current) {
      const addedArea = data.filter(area => !completedAreas.includes(area));
      const removedAreas = completedAreas.filter(area => !data.includes(area));
      setCompletedAreas(prevAreas => prevAreas.filter(area => !removedAreas.includes(area)));
      setCompletedAreas(prevAreas => [...prevAreas, ...addedArea]);

      if (addedArea.length > 0) {
        setNewlyCompletedArea(addedArea[0]);
        setShowCompletionAnimation(true);
        const timeout = setTimeout(() => {
          setShowCompletionAnimation(false);
        }, 6000);
  
        return () => clearTimeout(timeout);
      }
    }
    else if(data !== undefined) {
      initialLoad.current = false;
      setCompletedAreas(data);
    }
  }, [data]);

  return (
    <div>
      { showCompletionAnimation && <MapEffect /> }
    </div>
  )
}

export default MapEffectWrapperLogic;

MapEffectWrapperLogic.propTypes = {
  park: PropTypes.string.isRequired,
};