import { useChatProvider } from "@/providers/ChatProvider";
import SuggestionButton from "./SuggestionButton";

const Suggestions = () => {
  const { suggestions } = useChatProvider();

  return (
    <div className="max-w-3xl mx-auto w-full px-2 mt-2 flex gap-3 flex-wrap">
      {suggestions.map((suggestion: string) => (
        <SuggestionButton key={suggestion} suggestion={suggestion} />
      ))}
    </div>
  );
};

export default Suggestions;
