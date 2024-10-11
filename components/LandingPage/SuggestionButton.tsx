import { useChatProvider } from "@/providers/ChatProvider";
import { Button } from "../ui/Button";

const SuggestionButton = ({ suggestion }: { suggestion: string }) => {
  const { append } = useChatProvider();

  const onSubmit = async (message: string) =>
    append({ id: "1", role: "user", content: message });

  return (
    <Button
      onClick={() => onSubmit(suggestion)}
      className="flex flex-col items-start justify-start gap-1 text-black text-left border border-[#E7E7E74D] w-[277px] h-auto whitespace-normal rounded rounded-2xl shadow-md hover:shadow-lg transition-shadow text-lg"
    >
      {suggestion}
    </Button>
  );
};

export default SuggestionButton;
