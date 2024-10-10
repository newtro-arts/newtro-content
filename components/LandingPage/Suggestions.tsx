import SuggestionButton from "./SuggestionButton";

const promptOne = "What did I create this week???";
const promptTwo = "What's my Zora score???";

const Suggestions = () => (
  <div className="flex flex-col items-center space-y-4">
    <div className="flex items-start space-x-4">
      <SuggestionButton suggestion={promptOne} />
      <SuggestionButton suggestion={promptTwo} />
    </div>
  </div>
);

export default Suggestions;
