import Logo from "../LandingPage/Logo";
import Suggestions from "../LandingPage/Suggestions";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { useChatProvider } from "@/providers/ChatProvider";

const Chat = () => {
  const { input, handleInputChange, handleSubmit, messages } =
    useChatProvider();

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex-1 overflow-hidden flex flex-col justify-center items-center">
        {messages.length === 0 ? <Logo /> : <Messages />}
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
