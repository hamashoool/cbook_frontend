import { useMachine } from "@xstate/react";
import { siteMachine } from "../machines/siteMachine";

export const useSiteMachine = () => {
  const [state, send] = useMachine(siteMachine);
  return { state, send };
};
