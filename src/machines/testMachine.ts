import { createModel } from "xstate/lib/model";
export const authModel = createModel(
  {
    account: undefined as string | undefined,
  },
  {
    events: {
      LOGGED_IN: (account: string) => ({ account }),
      LOGGED_OUT: () => ({}),
      REPORT_ACCOUNT_PRESENT: (account: string) => ({ account }),
      REPORT_ACCOUNT_MISSING: () => ({}),
      LOGOUT: () => ({}),
    },
  }
);
export const authStateMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QEMCuAXAFgZXc9YAssgMaYCWAdmAHRlgkDWVUAgiSQPaqXoDEAJQCiABQDyAgCoB9VgGE5YgKoA5GSOHYhagNoAGALqJQAB06xy6cp0rGQAD0QBmABwA2Gk4CMAJgCsem5ugQCcbk4hfgA0IACeiC5eNAF6qXouegAsAOx6-gC++TFoWLj4RKQU1HSYDMyUbBzcvIKiEjLyiqoyhACS2Ni9KgDi+kZIIGYWVjZ2jgiuHt7+gcFuYRHRcYhe2dk0mX7eetle62FeXoXFGDh4BMRkVLQANpxQMBC9lHwAMmLDZSSMZ2KaWay2CbzDJ6GjZJyZVwhPR+LyZM4hGLxBBnfY+HxuPx+RHZEKZMIhbKFIogSicCBwOwlO7lR5VMCg8zg2ZQxAAWjcWP5HjSaR8IUuZzObmuIGZZQelWeNTqLHYXB46E50whc0QmR8QoQkQO2UJR0ygWyPicbipNPl9wqT2qbw+kG+2u5kNA8yCHjRgVtpJcTj2TiNXiycIJRKcfki0rcmVljtZStd70+YgwXpmPociH9NED4TtIVD4aNPlSNHLhJCYSy-h8Lmp+SAA */
  authModel.createMachine(
    {
      id: "authStateMachine",
      context: authModel.initialContext,
      initial: "checkingAccount",
      states: {
        checkingAccount: {
          invoke: {
            id: "authMachine-fetch",
            src: "fetchAccount",
          },
          on: {
            REPORT_ACCOUNT_PRESENT: {
              target: "loggedIn",
              actions: [
                authModel.assign({
                  account: (_, ev) => ev.account,
                }),
              ],
            },
            REPORT_ACCOUNT_MISSING: {
              target: "loggedOut",
              actions: [
                authModel.assign({
                  account: undefined,
                }),
              ],
            },
          },
        },
        loggedIn: {
          on: {
            LOGOUT: {
              target: "loggedOut",
            },
          },
        },
        loggedOut: {},
      },
    },
    {
      services: {
        fetchAccount: () => (send) => {
          return getAccount()
            .then(function (account) {
              send({ type: "REPORT_ACCOUNT_PRESENT", account });
            })
            .catch(function (err) {
              send("REPORT_ACCOUNT_MISSING");
            });
        },
      },
    }
  );
function getAccount() {
  return Promise.resolve("THE ACCOUNT");
}
