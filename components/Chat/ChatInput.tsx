import SubmitButton from "./SubmitButton";
import { useChatProvider } from "@/providers/ChatProvider";
import TaggedAccount from "./TaggedAccount";

interface ChatInputProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  input: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  handleSubmit,
  handleInputChange,
  input,
}) => {
  const {
    handleChange: handleTaggedChange,
    isTagging,
    taggedProfile,
  } = useChatProvider();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleTaggedChange(e);
    handleInputChange(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <div className="w-[90vw] md:w-full max-w-[555px] bg-transparent py-3 rounded-3xl border border-gray-300 p-1.5 mb-3 shadow-lg flex items-center">
      <form onSubmit={handleSubmit} className="w-full flex items-center">
        <textarea
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Send a message"
          className="w-full text-[#E7E7E780]/50 bg-transparent outline-none text-sm px-4 resize-none pr-12 duration-150 ease-in-out flex items-center"
          aria-label="Chat input"
          rows={1}
        />
        {(isTagging || taggedProfile) && <TaggedAccount />}
        <SubmitButton />
      </form>
    </div>
  );
};

export default ChatInput;
