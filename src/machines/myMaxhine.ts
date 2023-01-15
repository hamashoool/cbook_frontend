import { assign, createMachine } from "xstate";

export const myMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QFsCeBZAhgYwBYEsA7MAOnwgBswBiAMQFEAVAYQAkBtABgF1FQAHAPax8AF3yDCfEAA9EAFkUkAbAHYAnMoAcqgKwAaEKkQBaAEzrOJM7oC+tw2ix4ipCoMwQiUahEmkiADdBAGtSJxwCYhJ3T28EIMFsTHFJLm506SERVKkkWURdMyt5TmUbQ2MEE2VOdRJVM2VdcrsHEAiXaNivQh8wACcBwQGSfgoUgDMR5BJOqLcPXqgEwmDk3PTM-OyxCTzQOQQARk0VAGYzLWOKo1MiqzMmlpt7RwxI1xJJzHwKAFcBjQAEpMYEATW2AmEe0k0iO8i0lVM8mO8jeHQ+XVIPz+gJoMlgohSpEwk1EgwAFLpOLSAJTUeZfXEAoFQkC7XLwhRIu7VXQ6eztQiCCBwaRM4hZGFc-JHGokY4vAx8mrqVTWZ6tDGSgKUMDSnL7bknPQkLTyc56ZHVCyPNrvZwLGJLbyG2EHAoIeRXEjyXTnG4qqomGnHBqqc6WvQ6rHO2D-bDYODwHYy41yxDKZThziB24h8606wOzFO5m-VkGtNGuGZ73hi1W4MorTqIW2IA */
createMachine({
    id: "myMachine",
    initial: "idle",
    schema: {
        // events: {} as 
        // | { type: "FETCH" } 
        // | { type: "RESOLVE", data: string[] }
        // | { type: "REJECT", errorMessage: string }
        // | { type: "RETRY" } 

        services: {} as {
            fetchData: {
                data: string[];
            }
        }
    },
    tsTypes: {} as import("./myMaxhine.typegen").Typegen0,
    context: {
        data: [] as string[],
        errorMessage: "" as string,
    },
    states: {
        "idle": {
            on: {
                "FETCH": {
                    target: "loading",
                },
            },
        },
        "loading": {
            invoke: {
                src: "fetchData",

                onDone: {
                    target: "success",
                    actions: "assingDataContext",
                },

                onError: {
                    target: "failure",
                    actions: "assingErrorContext",
                },
            }
        },
        "success": {},
        "failure": {
            on: {
                "RETRY": {
                    target: "loading",
                },
            },
            after: {
                5000: {
                    target: "loading",
                },
            },
        },
    },
},
{
    actions: {
        assingDataContext: assign((context, event) => {
            return {
                data: event.data,
            }
        }),

        assingErrorContext: assign((context, event) => {
            return {
                errorMessage: (event.data as Error).message,
            }
        }),
    },
});

