import { useChatProvider } from "@/providers/ChatProvider";
import { AiOutlineEnter } from "react-icons/ai";

const SubmitButton = () => {
  const { input } = useChatProvider();
  const color = input.length > 0 ? "#000000" : "#F2E8CC";

  return (
    <button
      type="submit"
      className="px-2"
      aria-label="Send message"
    >
      <AiOutlineEnter color="white" size={24}/>
    </button>
  );
};

export default SubmitButton;
