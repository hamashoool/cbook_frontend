
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.myMachine.loading:invocation[0]": { type: "done.invoke.myMachine.loading:invocation[0]"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.myMachine.loading:invocation[0]": { type: "error.platform.myMachine.loading:invocation[0]"; data: unknown };
"xstate.after(5000)#myMachine.failure": { type: "xstate.after(5000)#myMachine.failure" };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "fetchData": "done.invoke.myMachine.loading:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: "fetchData";
        };
        eventsCausingActions: {
          "assingDataContext": "done.invoke.myMachine.loading:invocation[0]";
"assingErrorContext": "error.platform.myMachine.loading:invocation[0]";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "fetchData": "FETCH" | "RETRY" | "xstate.after(5000)#myMachine.failure";
        };
        matchesStates: "failure" | "idle" | "loading" | "success";
        tags: never;
      }
  