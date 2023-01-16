// @flow
import { Alert, Input } from '@material-tailwind/react';
import { useMachine } from '@xstate/react/lib/useMachine';
import * as React from 'react';
import { siteMachine } from '../../machines/siteMachine';

type Props = {

};
export const PageA = (props: Props) => {
    const [state, send] = useMachine(siteMachine, {
        services: {
            login: async () => {
                // get data from context
                const { username, password } = state.context;
                if (username === 'admin' && password === 'admin') {
                    return ["data"];
                } else {
                    throw new Error("Login error");
                }
            },
            register: async () => {
                return ["data"]
            },
            extraCheck: async () => {
                // throw new Error("error")
                return ["data"]
            },

            // logout: async () => {
            //     // clear the context

        },
    });

    return (
        <div className='flex flex-row gap-x-5 justify-evenly text-color'>
            <div className="flex flex-col gap-y-5 w-full">
                <h1>PageA</h1>
                <p> State Value: 
                    <pre>
                        {JSON.stringify(state.value)}
                    </pre>
                </p>
                <p> State Context:
                    <pre>
                        {JSON.stringify(state.context)}
                    </pre>
                </p>
                {state.matches('unauthonticated') &&
                <>
                    <button onClick={() => send('LOGIN')} className="btn btn-primary">Login</button>
                    <button onClick={() => send('REGISTER')} className="btn btn-primary">Reginster</button> 
                </>}

                {state.matches('login') && <button onClick={() => send('REGISTER')} className="btn btn-primary">Reginster</button>}
                {state.matches('register') && <button onClick={() => send('LOGIN')} className="btn btn-primary">Login</button>}
                {state.matches('loginError') && <button onClick={() => send('RETRY')} className="btn btn-primary">retry</button>}
                {state.matches('registrationError') && <button onClick={() => send('RETRY')} className="btn btn-primary">retry</button>}

                {state.matches('authenticated') && <button onClick={() => send('LOGOUT')} className="btn btn-primary">Logout</button>}
 
                {state.matches('login') && 
                    <form className="flex flex-col gap-y-5">
                        <div className="flex w-full items-end gap-4">
                            <Input 
                                variant="outlined" 
                                label="username" 
                                color='purple'
                                onChange={(e) => {
                                    send({
                                        type: 'usernameInputChanged',
                                        value: e.target.value
                                    })
                                }} 
                            />
                            <Input 
                                variant="outlined" 
                                label="password"
                                type='password' 
                                color='purple' 
                                onChange={(e) => {
                                    send({
                                        type: 'passwordInputChanged',
                                        value: e.target.value
                                    })
                                }}
                            />
                        </div>
                        <button onClick={() => send('SUBMIT')} className="btn btn-primary">submit</button>
                    </form>
                }

                {state.matches('login.success') && 
                    <Alert color='green'>
                        login successfully
                    </Alert>
                }
                {state.matches('loginError') && state.context.error === "Login error" &&
                    <Alert color='red'>
                        login unsuccessfully
                    </Alert>
                }
            </div>

            {/* create table with tailwindcss */}
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">UserId</th>
                        <th className="px-4 py-2">it</th>
                        <th className="px-4 py-2">title</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {state.context.data.map((item: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.userId}</td>
                                <td className="border px-4 py-2">{item.id}</td>
                                <td className="border px-4 py-2">{item.title}</td>
                            </tr>
                        );
                    })
                    } */}
                </tbody>
            </table>

        </div>
    );
};