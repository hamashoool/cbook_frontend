import { useMachine } from "@xstate/react";
import { AuthMachine } from "../machines/authMachine";
import { MyError } from "../utils/MyError";

export const useAuthMachine = () => {
  const [state, send] = useMachine(AuthMachine, {
    services: {
      login: async () => {
        // get data from context
        const { formInput } = state.context;
        if (formInput.email === "admin" && formInput.password1 === "admin") {
          // clear error from context
          return ["data"];
        } else {
          throw new MyError("Login error", "loginError");
        }
      },
      register: async () => {
        const { formInput } = state.context;
        if (formInput.password1 === formInput.password2) {
          return ["data"];
        } else {
          throw new MyError("Registration error", "registrationError");
        }
      },
      extraCheck: async () => {
        // throw new Error("error")
        return ["data"];
      },
      checkAuth: async () => {
        throw new Error("error");
        // return ["data"];
      },
    },
  });
  return { state, send };
};
