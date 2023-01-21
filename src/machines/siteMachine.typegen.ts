// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {};
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {};
  matchesStates:
    | "sidebar_is_closed"
    | "sidebar_is_closed.idle"
    | "sidebar_is_open"
    | "sidebar_is_open.idle"
    | { sidebar_is_closed?: "idle"; sidebar_is_open?: "idle" };
  tags: never;
}
