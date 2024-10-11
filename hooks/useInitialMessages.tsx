import { Message } from "ai";
import { Address } from "viem";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import getInitialMessages from "@/lib/stack/getInitialMessages";

const useInitialMessages = () => {
  const [initialMessages, setInitialMessages] = useState<Message[]>([]);
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      fetchInitialMessages(address);
    }
  }, [address]);

  const fetchInitialMessages = async (walletAddress: Address) => {
    try {
      const messages = await getInitialMessages(walletAddress);
      setInitialMessages(messages);
    } catch (error) {
      console.error("Error fetching initial messages:", error);
    }
  };

  return { initialMessages };
};

export default useInitialMessages;
