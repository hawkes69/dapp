import CompletionIndicator from "./CompletionIndicator";

function Completions() {
  return (
    <div className="flex justify-center items-center m-6">
      <div className="flex flex-row justify-center flex-wrap gap-12">
        <CompletionIndicator park="animalKingdom"/>
        <CompletionIndicator park="epcot"/>
        <CompletionIndicator park="hollywoodStudios"/>
        <CompletionIndicator park="magicKingdom"/>
        <CompletionIndicator park="islandsOfAdventure"/>
        <CompletionIndicator park="universalStudios"/>
      </div>
    </div>
  );
}

export default Completions;
