
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.exraCheck": { type: "done.invoke.exraCheck"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.login": { type: "done.invoke.login"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"done.invoke.register": { type: "done.invoke.register"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.exraCheck": { type: "error.platform.exraCheck"; data: unknown };
"error.platform.login": { type: "error.platform.login"; data: unknown };
"error.platform.register": { type: "error.platform.register"; data: unknown };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "extraCheck": "done.invoke.exraCheck";
"login": "done.invoke.login";
"register": "done.invoke.register";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: "extraCheck" | "login" | "register";
        };
        eventsCausingActions: {
          "assignPasswordToContext": "passwordInputChanged";
"assignUsernameToContext": "usernameInputChanged";
"assingErrorToContext": "error.platform.login";
"assingUserToContext": "done.invoke.login";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "extraCheck": "done.invoke.login" | "done.invoke.register";
"login": "SUBMIT";
"register": "SUBMIT";
        };
        matchesStates: "authenticated" | "login" | "login.idle" | "login.loading" | "login.success" | "loginError" | "register" | "register.idle" | "register.loading" | "register.registrationError" | "register.success" | "registrationError" | "unauthonticated" | { "login"?: "idle" | "loading" | "success";
"register"?: "idle" | "loading" | "registrationError" | "success"; };
        tags: never;
      }
  