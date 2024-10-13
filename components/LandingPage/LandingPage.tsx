import { useChatProvider } from "@/providers/ChatProvider";
import Chat from "../Chat";
import Logo from "./Logo";
import Suggestions from "./Suggestions";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

export default function LandingPage() {
  const { messages } = useChatProvider();

  return (
    <>
      <Navbar />
      <main className="flex w-full p-4 mt-24 gap-x-8">
        <Sidebar />
        <div className="bg-[#1F1F1F] w-full flex flex-col items-center lg:h-[80vh] justify-around border border-[#E7E7E780]/50 rounded-lg">
        <div className="flex flex-col items-center justify-center mt-8 space-y-4">
          {messages.length === 0 && <Logo />}
        </div>
        <div className="flex flex-col items-center space-x-2">
          <Suggestions />
          <Chat />
          <p className="text-xs text-green-fourth text-center">
          NewtroLearnHub can make mistakes. Check important info.
        </p>
        </div>
        </div>
      </main>
    </>
  );
}
