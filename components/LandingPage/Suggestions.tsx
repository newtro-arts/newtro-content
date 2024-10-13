import SuggestionButton from "./SuggestionButton";

const promptOne = "What did I create this week???";
const promptTwo = "What's my Zora score???";

const Suggestions = () => (
  <div className="flex flex-col items-center space-y-4">
    <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-4">
      <SuggestionButton suggestion={promptOne} />
      <SuggestionButton suggestion={promptTwo} />
    </div>
  </div>
);

export default Suggestions;
