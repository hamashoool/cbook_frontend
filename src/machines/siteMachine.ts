import { spawn } from "child_process";
import { createMachine, assign } from "xstate";
import { AuthMachine } from "./authMachine";

export const siteMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5SwJYBcwDpUTAIwEMAnAfRVhIHsAHMAOwGIAVAeQHE2AZAUQDkBBAGoBtAAwBdRKGqVUaFJTpSQAD0QAmdQFZMATn26AHIYAsW0QHYAjFZMmANCACeiK1t2ZRhgMzrdFgK1vbwA2E28AXwjHOSwcfGIyCgBjABtZSGZ2Lj4hMUkkEBk5BSVCtQRNHQMjU3NrWwdnVy9MLR8-XStvLXVDXS0TKOiQOkpceELY5WL0UuUKgFp1JpcEZaGR2OwUXEJScipaMulZOcUFjVXEEO9MEwMQq21u0RCLQxComPQ43YSDhQaPRMLtUmAZmd5BdyogLOpHGs3KI9AYTCFRCZRN50V8tr8dntEoc0hkIJCSjDQBVQnd+qJ3P0rAyniFETdqo9nlpXu9dN8QNt4vskiRSbBIKCIOCKecTqpECYbJh6YyuiyrGzmgg3HcHvp0ZjsbjhhEgA */
  createMachine({
    id: "site",
    tsTypes: {} as import("./siteMachine.typegen").Typegen0,
    initial: "sidebar_is_open",
    context: {
      user: null,
      isOpen: false,
    },
    states: {
      sidebar_is_open: {
        id: "sidebar_is_open",
        initial: "idle",
        states: {
          idle: {},
        },
        on: {
          TOGGLENAV: {
            target: "sidebar_is_closed",
          },
        },
      },
      sidebar_is_closed: {
        id: "sidebar_is_closed",
        initial: "idle",
        states: {
          idle: {},
        },
        on: {
          TOGGLENAV: {
            target: "sidebar_is_open",
          },
        },
      },
    },
  });
