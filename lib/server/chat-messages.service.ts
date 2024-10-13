import "server-only";

import getContext from "../getContext";
import { Address } from "viem";
import { AI_MODEL } from "../consts";
import { CLASE_1_TRANSCRIPT } from "../context/clase_1";

export function createChatMessagesService() {
  return new ChatMessagesService();
}

class ChatMessagesService {
  constructor() {}

  async getChatSettings(address: Address) {
    const context = await this.fetchRelevantContext(address);

    const systemMessage = `You are a helpful assistant with knowledge about Newtro Classes.
Here is some relevant data to help you answer:
${context}

Here's information about Newtro Class 1:
${CLASE_1_TRANSCRIPT}

Please use this information to provide accurate and relevant responses. You can discuss Newtro Classes and the user's data, but don't explicitly mention the data sources in your response.`;

    return {
      maxTokens: 500,
      systemMessage,
      model: AI_MODEL,
      temperature: 0.7,
    };
  }

  private async fetchRelevantContext(
    address: Address = "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38"
  ): Promise<string> {
    try {
      const context = await getContext(address);

      return JSON.stringify(context, null, 2);
    } catch (error) {
      console.error("Error reading or parsing JSON files:", error);
      return "{}";
    }
  }
}
