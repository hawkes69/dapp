import CompletionIndicator from "./CompletionIndicator";

import { 
  useFetchAttractionsQuery,
  useFetchRestaurantsQuery,
  useFetchShowsQuery,
} from "../../store/apis/dappApi";

function calculateCompletion(list, parkName) {
  const parkListTotal = list.filter(activity => activity.park === parkName).length;
  const parkListCompleted = list.filter(activity => activity.park === parkName && activity.completed).length;

  if (parkListTotal === 0) {
    return 0;
  }
  else {
    return (100 - (parkListCompleted / parkListTotal) * 100);
  }
}

function Completions() {
  const { data: attractionsData, isLoading: attractionsLoading } = useFetchAttractionsQuery();
  const { data: restaurantsData, isLoading: restaurantsLoading } = useFetchRestaurantsQuery();
  const { data: showsData, isLoading: showsLoading } = useFetchShowsQuery();

  return showsLoading || restaurantsLoading || attractionsLoading ? (
    <div className="flex items-center justify-center h-screen">Loading...</div>
  ) : (
    <div className="flex justify-center items-center m-8">
      <div className="flex flex-row justify-center flex-wrap gap-12">
        <CompletionIndicator
          name="animalKingdom"
          attractionsCompletion={calculateCompletion(attractionsData, "Animal Kingdom")}
          showsCompletion={calculateCompletion(showsData, "Animal Kingdom")}
          restaurantsCompletion={calculateCompletion(restaurantsData, "Animal Kingdom")}
        />
        <CompletionIndicator
          name="epcot"
          attractionsCompletion={calculateCompletion(attractionsData, "Epcot")}
          showsCompletion={calculateCompletion(showsData, "Epcot")}
          restaurantsCompletion={calculateCompletion(restaurantsData, "Epcot")}
        />
        <CompletionIndicator
          name="hollywoodStudios"
          attractionsCompletion={calculateCompletion(attractionsData, "Hollywood Studios")}
          showsCompletion={calculateCompletion(showsData, "Hollywood Studios")}
          restaurantsCompletion={calculateCompletion(restaurantsData, "Hollywood Studios")}
        />
        <CompletionIndicator
          name="magicKingdom"
          attractionsCompletion={calculateCompletion(attractionsData, "Magic Kingdom")}
          showsCompletion={calculateCompletion(showsData, "Magic Kingdom")}
          restaurantsCompletion={calculateCompletion(restaurantsData, "Magic Kingdom")}
        />
        <CompletionIndicator
          name="islandsOfAdventure"
          attractionsCompletion={calculateCompletion(attractionsData, "Islands Of Adventure")}
          showsCompletion={calculateCompletion(showsData, "Islands Of Adventure")}
          restaurantsCompletion={calculateCompletion(restaurantsData, "Islands Of Adventure")}
        />
        <CompletionIndicator
          name="universalStudios"
          attractionsCompletion={calculateCompletion(attractionsData, "Universal Studios")}
          showsCompletion={calculateCompletion(showsData, "Universal Studios")}
          restaurantsCompletion={calculateCompletion(restaurantsData, "Universal Studios")}
        />
      </div>
    </div>
  );
}

export default Completions;
