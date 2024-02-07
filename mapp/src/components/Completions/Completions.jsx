import { useState } from "react";
import CompletionIndicator from "./CompletionIndicator";

import { 
  useFetchAttractionsQuery,
  useFetchRestaurantsQuery,
  useFetchShowsQuery,
} from "../../store/apis/dappApi";

function calculateCompletionPercentage(list, parkName) {
  const parkListTotal = list.filter(activity => activity.park === parkName).length;
  const parkListCompleted = list.filter(activity => activity.park === parkName && activity.completed).length;

  if (parkListTotal === 0) {
    return 0;
  }
  else {
    return (100 - (parkListCompleted / parkListTotal) * 100);
  }
}

function activityTrackerType(parkName) {
  
}

function Completions() {
  const { data: attractionsData, isLoading: attractionsLoading } = useFetchAttractionsQuery();
  const { data: restaurantsData, isLoading: restaurantsLoading } = useFetchRestaurantsQuery();
  const { data: showsData, isLoading: showsLoading } = useFetchShowsQuery();

  return showsLoading || restaurantsLoading || attractionsLoading ? (
    <div className="flex items-center justify-center h-screen">Loading...</div>
  ) : (
    <div className="flex justify-center items-center m-12">
      <div className="flex flex-row justify-center flex-wrap gap-12">
        <CompletionIndicator name="animalKingdom" percentComplete={calculateCompletionPercentage(showsData, "Animal Kingdom")} />
        <CompletionIndicator name="epcot" percentComplete={calculateCompletionPercentage(showsData, "Epcot")} />
        <CompletionIndicator name="magicKingdom" percentComplete={calculateCompletionPercentage(showsData, "Magic Kingdom")} />
        <CompletionIndicator name="hollywoodStudios" percentComplete={calculateCompletionPercentage(showsData, "Hollywood Studios")} />
        <CompletionIndicator name="islandsOfAdventure" percentComplete={calculateCompletionPercentage(showsData, "Islands Of Adventure")} />
        <CompletionIndicator name="universalStudios" percentComplete={calculateCompletionPercentage(showsData, "Universal Studios")} />
      </div>
    </div>
  );
}

export default Completions;
