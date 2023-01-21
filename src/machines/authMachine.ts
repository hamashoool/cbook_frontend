import { createMachine, assign } from "xstate";

export const AuthMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QEMCuAXAFgOlQOzSwHs90BLAY2XUgGIISxsy8A3IgayYszAo4CCGTAG0ADAF1EoAA5FYZciWkgAHogCMADmxiAbACYALHqMBWAOwWDFrUYDM9gDQgAnogMGN2Q2bGWzIy0LPTMATgBfCJdCHHxYknIqGghaMAAndKJ07BkAG2oAM2yAW2wePkFhcSkkEDkFJTwVdQRHe11DE3MrGztnN0QwgzNdMVstDTMNDX0tMyiY4VwCYUTKajoAGQB5AHEASQA5GpUGxTJlOtb7Aw79Y1NLa1sHF3cEMOtsPwswjQsGkM9iCekWIFiKwSpA2KVoACUAKKHADKABVEfDTnVzk0WogQfcuk9eq8Bh97GE9NgjCFTHp7EDguDIXkiFAWAjkQd0ZjsbJ5BcrqBWgYxGJvEYHmJCX9aXp3ogzHpqV9QloxFoRkYDJMWcs2Ry8MwIHkwLQUQBVABCAFkDmj+fVBXjrpozJYaXpgiN7Az7PpFZ8xAZsIDgVKqeKtfqsNhDSwTWa0iVkGQ8gc8DIMABhTDIPAwCBO3GXZpuhAaRyjYZUu7KiZBuXYAFfYwekPaCyxnAJ41kU3mmTIWCwADu2QgGkz2fQeYLRZLLrL+MrjIs2CpWj0Fmj3pGCsGCD0YR0nhV0ZDeg0nh78fZibZyAgLCg9EYzDYnCYfaXjRXFZTGYOjhPYgIeiM0wWEGYTDD4yq3PMBiwSCBh3n297Pq+aSZNkuQFOgxTpGUv6SGcy7Cmo7qeiYPpmH6jiBkeGphGGDIzCY0xBLB6EPsasCoBQFBwLA754EwLDsFw2BgKo6TIHmlR-kK5YikqobippWlaYeHxig4PxBEZtaTLcvFGtgAlCSJOFZDk+RFKUMlyQpvD8MprpqQgdihl0p5VhYJgWIEQZaGF2BhbqDh-DK4yRNEEIGnxznoPJin8K+ABiyB5AOXJovCACaHkAV5N4zNgurlcqmqmCGoXBNg9hamFgVGOYZheHe6RgBysA0OktC7IcJxkTiFGqVRCDTBpYRgWIUp2HVRhBlMWisaYPmwcEC1aPY3W9WQ-UZEm5pWnaDolZRNwAmIYYylMGhhLS0W6ZoBg7oZQLWKedgWPtCWQj1fUDadtCoLAGQECUYAzrm+aFpAV2TaKwzeGBfj6ICVKBNBR4zOKm7mCC4qAhKC0HSDJ0Dsmw6jhO6RTnDc4I4uY0Cv+10eP8OjRUEj3aM9ZireKRibsMXgMncUqUpTR2gzTQ4juOk4GMz86I8W7POpzKPcwCTUtTK0tagYMFiKxMphBbIzBX8gVy8dOSKymaYZlm8MLkj2ullzCDIX6TWng4RiwchoehVWujzLBAKMpqnWOwrg60DImCMEcqAlAARhk6us97tQcypq7If4PiAtuDKdXtnhNgbVa6jup4grY3aA8swPy9TKeFGQ6T9UcyAw-nXta0XOslxWyFeBXXxzHcdinkGhjeK2bX1j6aEd3GXdO2DBSD8PsMeyzY-I6XEvi14GrjLYjhBp1oznoYu1auqScnU+L6FmJElftJPeA0L4VluE9JqVVnpfEQhoVatxQwaCCJSBw9hLD7k-jkb+2EMh2Xwo5Yi2AgEZBAV5dcd1dyMmmM9QKYE3qVgBGLYC8x6KBEpLjDBllBLCVHH-T8UkmCyTSm5DgJCpqGFWrBaku12rDFsPRAGSxd6HX3lZbhokcF4QcoRJygjXJKR9hNUu5hQwhA9HNKUMxhb4yeqMTaOpgj-WttYDhslUp6P4NldMqQkQFWKgY3Wpc-g6GDrcK8AY8YfBmM9FsRlrD2MegsHeOBYhgBhMkbY+wdiWkdP4qeZUzb423glPARAIBwBULEciASKwAFo-RBhqcFGksFfqNy1N9O88Q1hpM2BAKpeSpoG2sDef0UpAhVhghuLw7Veg6j8Duduijex8X6Z5KaodLZzV3ItboC0V6zDDB9UEHoQ6JKWfeCyitVmlUGWBM82gTysJsM9ApHx1qjDaUEZCtgRgaHMo+IgWFCzXL9gCQwYZJg2I1GKaFoU-hhiBECU8M1hgKMSnGDCqiRIgr1tNWkugtkLU1LslaR555hksOtOafpdzzH+caVxQjKhZRygOHFq5ZhAh+EBL4MwwWagahuSKrV2odS6kkwhyiBrsunlEyqhJEV8qmEGaKhydzAVpJqdaiz0U4CIc7QcMqvLfJ0N6YKcxKUMlJZEsU3h1pLWag8pkHCsHAvGtU0hzUpFTEMIvVeiDVo2JpBYpF15-DGA4Vi0cRqpqSymQq68SqrGRLjj4Iy9FTwSyMC41Qbj0ocE8XkPp7qBmikMNSUIr9-jNXrIG6JdiPq+oYneFJPSUgxtFPi6WYEQ7GJGatMKYtEFLVgkYRBQIwRRAiEAA */
  createMachine(
    {
      tsTypes: {} as import("./authMachine.typegen").Typegen0,
      schema: {
        services: {} as {
          login: {
            data: string[];
          };

          register: {
            data: string[];
          };

          logout: {
            data: string[];
          };

          extraCheck: {
            data: string[];
          };
          checkAuth: {
            data: string[];
          };
        },
        events: {} as
          | {
              type: "usernameInputChanged";
              value: string;
            }
          | {
              type: "firstNameInputChanged";
              value: string;
            }
          | {
              type: "lastNameInputChanged";
              value: string;
            }
          | {
              type: "emailInputChanged";
              value: string;
            }
          | {
              type: "phoneNumberInputChanged";
              value: string;
            }
          | {
              type: "password1InputChanged";
              value: string;
            }
          | {
              type: "password2InputChanged";
              value: string;
            }
          | {
              type: "SUBMIT";
            }
          | {
              type: "LOGIN";
            }
          | {
              type: "REGISTER";
            }
          | {
              type: "LOGOUT";
            }
          | {
              type: "RETRY";
            }
          | {
              type: "CLEAR_ERROR";
            },
      },
      context: {
        user: [] as string[],
        error: {
          message: "" as string,
          type: "" as string,
        },
        formInput: {
          username: "" as string,
          password1: "" as string,
          password2: "" as string,
          email: "" as string,
          phoneNumber: "" as string,
          firstName: "" as string,
          lastName: "" as string,
        },
      },
      id: "auth",
      initial: "unauthonticated",
      states: {
        unauthonticated: {
          on: {
            LOGIN: "login",
            REGISTER: "register",
          },
          invoke: {
            id: "checkAuth",
            src: "checkAuth",
            onDone: [
              {
                target: "#auth.authenticated",
                actions: "assingUserToContext",
              },
            ],
            onError: {
              target: "#auth.login",
            },
          },
        },

        login: {
          initial: "idle",

          states: {
            idle: {
              on: {
                SUBMIT: "loading",

                emailInputChanged: {
                  target: "idle",
                  internal: true,
                  actions: "assignEmailToContext",
                },

                password1InputChanged: {
                  target: "idle",
                  internal: true,
                  actions: "assignPassword1ToContext",
                },
              },
            },

            loading: {
              invoke: {
                id: "login",
                src: "login",
                onDone: [
                  {
                    target: "success",
                    actions: "assingUserToContext",
                  },
                ],
                onError: {
                  target: "idle",
                  actions: "assingErrorToContext",
                },
              },
            },

            success: {
              invoke: {
                id: "exraCheck",
                src: "extraCheck",
                onDone: [
                  {
                    target: "#auth.authenticated",
                  },
                ],
                onError: "extraCheckingFalid",
              },
            },

            extraCheckingFalid: {
              on: {
                RETRY: "idle",
              },
            },
          },

          on: {
            REGISTER: "register",
          },
        },

        register: {
          initial: "idle",

          states: {
            idle: {
              on: {
                SUBMIT: "loading",

                usernameInputChanged: {
                  target: "idle",
                  internal: true,
                  actions: "assignUsernameToContext",
                },

                password1InputChanged: {
                  target: "idle",
                  internal: true,
                  actions: "assignPassword1ToContext",
                },

                password2InputChanged: {
                  target: "idle",
                  internal: true,
                  actions: "assignPassword2ToContext",
                },

                emailInputChanged: {
                  target: "idle",
                  internal: true,
                  actions: "assignEmailToContext",
                },

                phoneNumberInputChanged: {
                  target: "idle",
                  internal: true,
                  actions: "assignPhoneNumberToContext",
                },

                firstNameInputChanged: {
                  target: "idle",
                  internal: true,
                  actions: "assignFirstNameToContext",
                },

                lastNameInputChanged: {
                  target: "idle",
                  internal: true,
                  actions: "assignLastNameToContext",
                },
              },
            },

            loading: {
              invoke: {
                id: "register",
                src: "register",
                onDone: [
                  {
                    target: "success",
                  },
                ],
                onError: {
                  target: "idle",
                  actions: "assingErrorToContext",
                },
              },
            },

            success: {
              invoke: {
                id: "exraCheck",
                src: "extraCheck",
                onDone: [
                  {
                    target: "#auth.authenticated",
                  },
                ],
                onError: "extraCheckFaild",
              },
            },

            extraCheckFaild: {
              on: {
                RETRY: "idle",
              },
            },
          },

          on: {
            LOGIN: "login",
          },
        },

        authenticated: {
          on: {
            LOGOUT: "unauthonticated",
          },
        },
      },
    },
    {
      actions: {
        assingUserToContext: assign((context, event) => {
          if (context.error.message !== "" || context.error.type !== "")
            context.error = { message: "", type: "" };
          return {
            user: event.data,
          };
        }),

        // clearError: assign((context, event) => {
        //   return {
        //     error: {
        //       message: "",
        //       type: "",
        //     },
        //   };
        // }),

        assingErrorToContext: assign((context, event) => {
          return {
            error: {
              ...context.error,
              message: (event.data as Error).message,
              type: (event.data as Error).name,
            },
          };
        }),

        assignUsernameToContext: assign((context, event) => {
          return {
            formInput: {
              ...context.formInput,
              username: event.value,
            },
          };
        }),

        assignPassword1ToContext: assign((context, event) => {
          return {
            formInput: {
              ...context.formInput,
              password1: event.value,
            },
          };
        }),

        assignPassword2ToContext: assign((context, event) => {
          return {
            formInput: {
              ...context.formInput,
              password2: event.value,
            },
          };
        }),

        assignEmailToContext: assign((context, event) => {
          return {
            formInput: {
              ...context.formInput,
              email: event.value,
            },
          };
        }),

        assignPhoneNumberToContext: assign((context, event) => {
          return {
            formInput: {
              ...context.formInput,
              phoneNumber: event.value,
            },
          };
        }),

        assignFirstNameToContext: assign((context, event) => {
          return {
            formInput: {
              ...context.formInput,
              firstName: event.value,
            },
          };
        }),

        assignLastNameToContext: assign((context, event) => {
          return {
            formInput: {
              ...context.formInput,
              lastName: event.value,
            },
          };
        }),
      },
    }
  );
