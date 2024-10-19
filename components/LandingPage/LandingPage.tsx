import { useChatProvider } from "@/providers/ChatProvider";
import Chat from "../Chat";
import Logo from "./Logo";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

export default function LandingPage() {
  const { messages } = useChatProvider();

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-1 w-full p-4 mt-24 gap-x-8 overflow-hidden">
        <Sidebar />
        <div className="bg-[#1F1F1F] w-full flex flex-col items-center justify-between border border-[#E7E7E780]/50 rounded-lg overflow-hidden">
          <div className="flex flex-col items-center w-full h-full overflow-hidden">
            <div className="flex flex-col items-center justify-center mt-8 space-y-4">
              {messages.length === 0 && <Logo />}
            </div>
            <div className="w-full flex-grow overflow-hidden">
              <Chat />
            </div>
            <p className="text-xs text-green-fourth text-center mt-2">
              NewtroLearnHub can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
