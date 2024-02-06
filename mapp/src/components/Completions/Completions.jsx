import CompletionIndicator from "./CompletionIndicator";

function Completions() {
  return (
    <div className="flex justify-center items-center m-12">
      <div className="flex flex-row justify-center flex-wrap gap-12">
        <CompletionIndicator name="animalKingdom" />
        <CompletionIndicator name="epcot" />
        <CompletionIndicator name="magicKingdom" />
        <CompletionIndicator name="hollywoodStudios" />
        <CompletionIndicator name="islandsOfAdventure" />
        <CompletionIndicator name="universalStudios" />
      </div>
    </div>
  );
}

export default Completions;
