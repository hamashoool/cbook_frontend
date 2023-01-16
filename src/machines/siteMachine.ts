import { createMachine, assign } from 'xstate';
import { Typegen0 } from './siteMachine.typegen';

export const siteMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5SwJYBcwDoCuA7AhtmgBYD2uaKAxvhhAMQAyA8gOICSAcgNoAMAuolAAHUqkrkhIAB6IAzAA4AjJgBMvOUrm9eCgJyq9BgDQgAnogCsAdhUKALHIBsDvU97W9ChQF8fp8Sw8QhJySho6egAlAFEOAGUAFRiovkEkEFFxFEkM2QRFFXVNbV0DI1VTCwR1XjV7I0tVJXsHFz17PwD0LAAbUigUXGi49iSUtKks9BzcKXylJyUFTCd7Xks9Dwc5RyrENdU1Sx0lFt4nDqUukEDMfsHcTBQIXrB6eIBVACEAWXZEpMMtMJHM8ohrGtMNslBdLDZFtZ9ghlJZMCcdHJnJZFs1fP5bj17gMhs9Xu9sLAwAAnAgAWzA7FwwiIAGFiPhcDAIECRGIZrlQPlLNpMPYRUp1EZlIjkbY0bx7C5FFtVAonDibncHqSXm96MJ8LBYAB3UjUiBMllodmc7m8zL80HzKyaTCShrq7SOBpI8wHJR6aF6ZwdBy6dbWLVEnVPfr4CBDKD0CDkLBDABupAA1n0SbgHSDZi6ELDvJgDMs5JYliGlvZkU4NZhrNZdssNNYLopoxhiY9iQmk-QadTzZhhL1aAAzc10-tDQtO4vg0vuFZrDZbaw7Pb+lF6NGGFzq3SLNx6Xt5gewbBUKhwWAptPPXBZ3OYMDSan4dlgKjZku2SCjIiCLLoqzrJs2w+nIyJyOoFZGG46hqjivCXgS2r5pgt73o+I7UmO1ITlOaCztS85fj+f4AUBApgkKYFLBuUHbrucH7l2RzWA0XiKgovCGKoUZYUS1JgIMsAYNSTBsFw9HOqurRouKmhSl4ZxOH61RnBh0I6DoThyCGJkbFemASVJMlkvqXx-ACikrkxNSqJYKzrEsawhgo7kNvuTZOC2fEKNYqgIe4bgWVZKDSTSg6Jlyz64Omb45lgMVxdSTkgfkqgsWKTSeG5zS2HojYikh0r2LxgmSk40WSbFNnxolyajuOk4znOllNVlOWMaBBQYXU2laPoQmKg0cpKGi1gYrsTQKCZkKNdZ8V4Q+xrJal75YNRv7EP+gECFMy65fII2rLYKqTfY00BYhvHSk44XeJCmHdH2mU2ZtBEdSRXXkT1B20Sd6R8sBg35NoWzXeNqpTeVAUuPUjQXpcGyqGtzXxT9P6gjERHmiMiRRAAmgNJaodYLbLDWNa+RsYWNk2wXSmFEUYQ1Yl9iER0UNQtCQHJrDMJ8gKncC53Q2B6z2Ksr2QkovGeK9TjwUFCH6DuImhbDnS8xlfVoATsxE8RpMU1Tq4q+WoUNL6SqhW2yL3XUqh8bxsJlGcolfdeQwWyTsRk5TUuQwxJYNKpEoaTK2nIl4Kye9Kij2IsGqiQSuCkBAcBSIEZ1QyWs3+dUAC0OLurYQnVmcSq6LxFnBEQZCCxEkDF1Hq6ocigYpxiQnLU0vBnBZsbd0pLmtEcamShhmmyvuEronWIYbBcrSfYSfaxrZYBT85Q3ubTkI1j7HRdjVyKolVXjHq0+g8wHC5xqQQ5ckfF0or5ahuMtWaNY9CSgUHKAwYpkIgIAUA-2u9A5PD+sab+stSyGDkO6DCzhlr2GEvlVmGCoEgMUM4RQ2Mja9XWtSFBpdBJokPNoNYDhYQfWRJYDO98rgilwZqChP14p6kPtLEuvctBBk8hsWsBhxSWFZrTNypw3LzT0PNF+8DKG4xIq1JMNDe5yE8KsT2O5fJMI1OXA4jh2ZGFetWUK8IcZZVwneLa8BhE9xciJea7p1iZxsKqZG1RXriKgZsRwXl8Sv34SRfGtBzbE2oW46eQ16aEJFFvZhHhLhyOOIomwmxVEWX5mADuwsIC6JcghDo6JXpjzbF2HEvFGywndKndyLRdYKHIZEk2ZtyDBwSZHJJMMRIKxrOoFW+iNgq3MQgepLSMRrH0bsfQE98z9PKckzpqTGGtAzpkgJiAVFBVer6Caix7o8z8EAA */
createMachine({
    tsTypes: {} as import("./siteMachine.typegen").Typegen0,
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
        },
        events: {} as 
            | {
                    type: "passwordInputChanged";
                    value: string;
            }
            | {
                    type: "usernameInputChanged";
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
            

    },
    context: { 
        user: [] as string[],
        error: undefined as string | undefined,
        username: "",
        password: ""
     },
    id: 'site',
    initial: 'unauthonticated',
    states: {
        unauthonticated: {
            on: {
                LOGIN: 'login',
                REGISTER: 'register'
            }
        },

        login: {
            initial: 'idle',

            states: {
                idle: {
                    on: {
                        SUBMIT: 'loading',

                        usernameInputChanged: {
                            target: "idle",
                            internal: true,
                            actions: "assignUsernameToContext"
                        },

                        passwordInputChanged: {
                            target: "idle",
                            internal: true,
                            actions: "assignPasswordToContext"
                        }
                    }
                },

                loading: {
                    invoke: {
                        id: 'login',
                        src: 'login',
                        onDone: [{
                            target: 'success',
                            actions: 'assingUserToContext'
                        }],
                        onError: {
                            target: "#site.loginError",
                            actions: 'assingErrorToContext'
                        }
                    }
                },

                success: {
                    invoke: {
                        id: 'exraCheck',
                        src: 'extraCheck',
                        onDone: [{
                            target: '#site.authenticated',
                        }],
                        onError: "#site.loginError"
                    }
                }
            },

            on: {
                REGISTER: "register"
            }
        },

        register: {
            initial: 'idle',

            states: {
                idle: {
                    on: {
                        SUBMIT: 'loading'
                    }
                },

                loading: {
                    invoke: {
                        id: 'register',
                        src: 'register',
                        onDone: [{
                            target: 'success',
                        }],
                        onError:"#site.registrationError"
                    }
                },

                success: {
                    invoke: {
                        id: 'exraCheck',
                        src: 'extraCheck',
                        onDone: [{
                            target: '#site.authenticated',
                        }],
                        onError: "#site.registrationError"
                    }
                },

                registrationError: {
                    on: {
                        RETRY: 'idle'
                    }
                }
            },

            on: {
                LOGIN: "login"
            }
        },

        authenticated: {
            on: {
                LOGOUT: "unauthonticated"
            }
        },

        registrationError: {
            on: {
                RETRY: "register"
            }
        },
        loginError: {
            on: {
                RETRY: "login"
            }     
        }
    }
}, {
    actions: {
        assingUserToContext: assign((context, event) => {
            return {
                user: event.data
            }
        }),

        assingErrorToContext: assign((context, event) => {
            return {
                error: (event.data as Error).message
            }
        }),

        assignUsernameToContext: assign((context, event) => {
            return {
                username: event.value
            }
        }),

        assignPasswordToContext: assign((context, event) => {
            return {
                password: event.value
            }
        })
    },
});
