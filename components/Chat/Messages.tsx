import { Message } from "ai";

const Messages = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="w-full max-w-xl mt-4 mb-4 overflow-y-auto">
      <div className="space-y-4">
        {messages.map((message: Message, index: number) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              message.role === "user"
                ? "bg-white text-black"
                : "bg-green text-black"
            }`}
          >
            <p className="text-sm">{message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
