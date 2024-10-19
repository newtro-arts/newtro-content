import Suggestions from "../LandingPage/Suggestions";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { useChatProvider } from "@/providers/ChatProvider";

const Chat = () => {
  const { input, handleInputChange, handleSubmit } = useChatProvider();

  return (
    <div className="w-full h-full flex flex-col border items-center">
      <div className="flex-1 overflow-hidden">
        <Messages />
      </div>
      <Suggestions />
      <ChatInput
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        input={input}
      />
    </div>
  );
};

export default Chat;
