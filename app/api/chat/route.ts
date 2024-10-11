import { createChatLLMService, StreamResponseSchema } from '@/lib/server/chat-llm.service';
import { enhanceRouteHandler } from '@/packages/next/src/routes';

export const dynamic = 'force-dynamic';

export const POST = enhanceRouteHandler(
  async ({ body }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const service = createChatLLMService();
    const referenceId = "if1Fg9bo"; // hard coded for demo

    try {    
      return await service.streamResponse(body, referenceId);
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : 'Unknown error';
      return new Response(message, { status: 500 });
    }
  },
  {
    schema: StreamResponseSchema,
  },
);
