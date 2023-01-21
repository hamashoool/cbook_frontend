// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.checkAuth": {
      type: "done.invoke.checkAuth";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.exraCheck": {
      type: "done.invoke.exraCheck";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.login": {
      type: "done.invoke.login";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.register": {
      type: "done.invoke.register";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.checkAuth": {
      type: "error.platform.checkAuth";
      data: unknown;
    };
    "error.platform.exraCheck": {
      type: "error.platform.exraCheck";
      data: unknown;
    };
    "error.platform.login": { type: "error.platform.login"; data: unknown };
    "error.platform.register": {
      type: "error.platform.register";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    checkAuth: "done.invoke.checkAuth";
    extraCheck: "done.invoke.exraCheck";
    login: "done.invoke.login";
    register: "done.invoke.register";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: "checkAuth" | "extraCheck" | "login" | "register";
  };
  eventsCausingActions: {
    assignEmailToContext: "emailInputChanged";
    assignFirstNameToContext: "firstNameInputChanged";
    assignLastNameToContext: "lastNameInputChanged";
    assignPassword1ToContext: "password1InputChanged";
    assignPassword2ToContext: "password2InputChanged";
    assignPhoneNumberToContext: "phoneNumberInputChanged";
    assignUsernameToContext: "usernameInputChanged";
    assingErrorToContext: "error.platform.login" | "error.platform.register";
    assingUserToContext: "done.invoke.checkAuth" | "done.invoke.login";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    checkAuth: "LOGOUT" | "xstate.init";
    extraCheck: "done.invoke.login" | "done.invoke.register";
    login: "SUBMIT";
    register: "SUBMIT";
  };
  matchesStates:
    | "authenticated"
    | "login"
    | "login.extraCheckingFalid"
    | "login.idle"
    | "login.loading"
    | "login.success"
    | "register"
    | "register.extraCheckFaild"
    | "register.idle"
    | "register.loading"
    | "register.success"
    | "unauthonticated"
    | {
        login?: "extraCheckingFalid" | "idle" | "loading" | "success";
        register?: "extraCheckFaild" | "idle" | "loading" | "success";
      };
  tags: never;
}
