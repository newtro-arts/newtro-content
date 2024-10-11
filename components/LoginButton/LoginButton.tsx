"use client";

import { useAccount, useDisconnect } from "wagmi";
import useConnectWallet from "@/hooks/useConnectWallet";
import Button from "@/components/Button";

export default function LoginButton() {
  const { status } = useAccount();
  const { connectWallet } = useConnectWallet();
  const { disconnect } = useDisconnect();

  if (["connecting", "reconnecting"].includes(status))
    return <Button disabled>Loading...</Button>;

  const isConnected = status === "connected";

  return (
    <Button
      onClick={isConnected ? disconnect : connectWallet}
      className="font-Pragmatica hover:bg-primary border border-green-fourth hover:text-green-fourth uppercase py-2 px-1"
    >
      {isConnected ? "Disconnect" : "Connect"}
    </Button>
  );
}
