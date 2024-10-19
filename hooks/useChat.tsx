import { useCsrfToken } from "@/packages/shared/src/hooks";
import { Message, useChat as useAiChat } from "ai/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import useConnectWallet from "./useConnectWallet";
import trackNewMessage from "@/lib/stack/trackNewMessage";
import { Address } from "viem";
import useInitialMessages from "./useInitialMessages";
import useTaggedProfile from "./useTaggedProfile";
import { useState, useMemo } from "react";
import { SUGGESTIONS } from "@/lib/consts";

const useChat = () => {
  const taggedProfile = useTaggedProfile();
  const { connectWallet } = useConnectWallet();
  const csrfToken = useCsrfToken();
  const accountId = "3664dcb4-164f-4566-8e7c-20b2c93f9951";
  const queryClient = useQueryClient();
  const { address } = useAccount();
  const { initialMessages } = useInitialMessages();

  const initialSuggestions = useMemo(() => {
    const shuffled = [...SUGGESTIONS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  const [suggestions, setSuggestions] = useState(initialSuggestions);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit: handleAiChatSubmit,
    append: appendAiChat,
    isLoading: pending,
  } = useAiChat({
    api: `/api/chat`,
    headers: {
      "X-CSRF-Token": csrfToken,
    },
    body: {
      accountId,
      address: taggedProfile?.taggedProfile?.address || address,
    },
    initialMessages,
    onError: console.error,
    onFinish: async (message) => {
      console.log("SWEETS onFinish", message);
      const response = await fetch(`/api/prompts?answer=${message.content}`);
      const data = await response.json();
      console.log(data);
      setSuggestions(data.questions);
      void queryClient.invalidateQueries({
        queryKey: ["credits", accountId],
      });
    },
  });

  const isPrepared = () => {
    if (!address) {
      connectWallet();
      return false;
    }
    return true;
  };

  const append = async (message: Message) => {
    if (!isPrepared()) return;
    await trackNewMessage(address as Address, message);
    await appendAiChat(message);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isPrepared()) return;
    handleAiChatSubmit(e);
    await trackNewMessage(address as Address, {
      content: input,
      role: "user",
      id: `${address}-${Date.now().toLocaleString()}`,
    });
  };

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    pending,
    suggestions,
    ...taggedProfile,
  };
};

export default useChat;
