import CompletionIndicator from "./CompletionIndicator";

function Completions() {
  return (
    <div className="flex flex-col">
      <CompletionIndicator name="animalKingdom" />
      <CompletionIndicator name="epcot" />
      <CompletionIndicator name="magicKingdom" />
      <CompletionIndicator name="hollywoodStudios" />
      <CompletionIndicator name="islandsOfAdventure" />
      <CompletionIndicator name="universalStudios" />
    </div>
  );
}

export default Completions;
