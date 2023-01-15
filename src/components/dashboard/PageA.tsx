// @flow
import { useMachine } from '@xstate/react/lib/useMachine';
import * as React from 'react';
import {Outlet} from "react-router-dom";
import { myMachine } from '../../machines/myMaxhine';

type Props = {

};
export const PageA = (props: Props) => {
    const [state, send] = useMachine(myMachine, {
        services: {
            fetchData: async () => {
                // throw new Error('Error');
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                return data;
            }
        }
    });

    return (
        <div className='flex flex-row gap-x-5 justify-evenly text-color'>
            <div className="flex flex-col gap-y-5">
                <h1>PageA</h1>
                <button onClick={() => send('FETCH')} className="btn btn-primary">Fetch</button>
                <p> State Value: 
                    <pre>
                        {JSON.stringify(state.value)}
                    </pre>
                </p>
            </div>

            {/* create table with tailwindcss */}
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">UserId</th>
                        <th className="px-4 py-2">it</th>
                        <th className="px-4 py-2">title</th>
                    </tr>
                </thead>
                <tbody>
                    {state.context.data.map((item: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.userId}</td>
                                <td className="border px-4 py-2">{item.id}</td>
                                <td className="border px-4 py-2">{item.title}</td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>

        </div>
    );
};