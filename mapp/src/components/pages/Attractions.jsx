import { useState, useEffect } from "react";

import List from "../List";
import { useFetchAttractionsQuery, useFetchExperienceCompletionQuery } from "../../store/apis/dappApi";
import LogoEffect from "../completions/LogoEffect";

function toCamelCase(text) {
  const textWithoutPunctuation = text.replace(/[^\w\s]/g, ''); // Needed for main street but good to have
  return textWithoutPunctuation.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function Attractions() {
  const { data, isLoading } = useFetchAttractionsQuery();
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);
  const {data: experienceData, isLoading: edLoading} = useFetchExperienceCompletionQuery("Attractions");
  const [completedParks, setCompletedParks] = useState([]);
  const [newlyCompletedPark, setNewlyCompletedPark] = useState("");

  console.log("master list", completedParks)

  useEffect(() => {

    if (!edLoading) {
      const newCompletedParks = Object.keys(experienceData).filter(park => experienceData[park] === 100);
      console.log("new parks with 100", newCompletedParks)
      const addedPark = newCompletedParks.filter(park => !completedParks.includes(park));

      const removedParks = completedParks.filter(park => !newCompletedParks.includes(park));

      setCompletedParks(prevParks => prevParks.filter(park => !removedParks.includes(park)));
      console.log("new park added to list", addedPark)
      setCompletedParks(prevParks => [...prevParks, ...addedPark]);

      if (addedPark.length > 0) {
        setNewlyCompletedPark(toCamelCase(addedPark[0]));
        setShowCompletionAnimation(true);
        const timeout = setTimeout(() => {
          setShowCompletionAnimation(false);
        }, 6000);
  
        return () => clearTimeout(timeout);
      }
    }
  }, [experienceData]);

  return (
    <div>
      {showCompletionAnimation && <LogoEffect className="absolute" imageLinks={[`${newlyCompletedPark}Grayscale`, `${newlyCompletedPark}Color`]} />}
      <List type="Attractions" data={data} isLoading={isLoading} />
    </div>
  );
}

export default Attractions;
