import { useChatProvider } from "@/providers/ChatProvider";
import { Message } from "ai";
import { UserIcon, TvMinimalPlay } from "lucide-react";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Thinking from "./Thinking";
import remarkGfm from "remark-gfm";

const Messages = () => {
  const { messages, pending } = useChatProvider();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, pending]);

  return (
    <div className="h-full overflow-y-auto px-4">
      {messages.map((message: Message, index: number) => (
        <div key={index} className="py-3 flex w-full gap-2">
          <div className="flex-shrink-0">
            {message.role === "user" ? (
              <UserIcon className="h-6 w-6" />
            ) : (
              <TvMinimalPlay className="h-6 w-6" />
            )}
          </div>
          <div className="flex-grow text-sm font-sans break-words">
            <ReactMarkdown className="text-sm" remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          </div>
        </div>
      ))}
      {pending && <Thinking />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
