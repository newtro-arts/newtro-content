import { createConfig, http } from "wagmi";
import { coinbaseWallet } from "wagmi/connectors";
import { base, baseSepolia } from "viem/chains";

const wagmiConfig = createConfig({
  chains: [base, baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: "NewtroLearnHub",
      preference: "smartWalletOnly",
    }),
  ],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
});

export default wagmiConfig;
