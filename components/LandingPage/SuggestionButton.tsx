import { useChatProvider } from "@/providers/ChatProvider";
import { Button } from "../ui/Button";

const SuggestionButton = ({ suggestion }: { suggestion: string }) => {
  const { append } = useChatProvider();

  const onSubmit = async (message: string) =>
    append({ id: "1", role: "user", content: message });

  return (
    <Button
      onClick={() => onSubmit(suggestion)}
      className="flex flex-col text-sm text-[#E7E7E780]/50 font-light justify-center gap-1 text-left items-start border border-[#E7E7E74D] w-[277px] min-h-[75px] p-4 whitespace-normal rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      {suggestion}
    </Button>
  );
};

export default SuggestionButton;
