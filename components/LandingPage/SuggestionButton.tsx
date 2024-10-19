import { useChatProvider } from "@/providers/ChatProvider";
import { ArrowUpRightIcon } from "lucide-react";
import { v4 as uuidV4 } from "uuid";

const SuggestionButton = ({ suggestion }: { suggestion: string }) => {
  const { append } = useChatProvider();

  return (
    <button
      key={suggestion}
      type="button"
      className="border border-gray-700 py-1 px-3 rounded-md flex gap-1 items-center text-xs"
      onClick={() =>
        append({
          id: uuidV4(),
          role: "user",
          content: suggestion,
        })
      }
    >
      <p className="text-left">{suggestion}</p>
      <ArrowUpRightIcon className="w-4 h-4" />
    </button>
  );
};

export default SuggestionButton;
