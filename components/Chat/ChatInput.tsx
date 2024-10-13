import SubmitButton from "./SubmitButton";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useChatProvider } from "@/providers/ChatProvider";

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
    <div className="w-full max-w-[555px] bg-transparent py-3 rounded-3xl border border-gray-300 p-1.5 mb-3 shadow-lg flex items-center">
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
        {(isTagging || taggedProfile) && (
          <div className="mr-2">
            {taggedProfile ? (
              <Image
                src={taggedProfile.avatar}
                alt={taggedProfile.username}
                width={24}
                height={24}
                className="rounded-full"
                blurDataURL={taggedProfile.avatar}
              />
            ) : (
              <Loader2 className="h-4 w-4 animate-spin text-green-fourth" />
            )}
          </div>
        )}
        <SubmitButton />
      </form>
    </div>
  );
};

export default ChatInput;
