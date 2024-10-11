import { StackClient } from "@stackso/js-core";

const FALLBACK = parseInt(
  process.env.NEXT_PUBLIC_POINT_SYSTEM_ID as string,
  10
);

const getStackClient = (pointSystemId: number = FALLBACK) => {
  const stack = new StackClient({
    apiKey: process.env.NEXT_PUBLIC_STACK_KEY as string,
    pointSystemId,
  });

  return stack;
};

export default getStackClient;
