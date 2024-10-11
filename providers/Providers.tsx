"use client";

import { ChatProvider } from "./ChatProvider";
import WagmiProvider from "./WagmiProvider";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <WagmiProvider>
    <ChatProvider>{children}</ChatProvider>
  </WagmiProvider>
);

export default Providers;
