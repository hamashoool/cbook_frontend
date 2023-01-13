// @flow
import * as React from 'react';
import {Outlet} from "react-router-dom";

type Props = {

};
export const PageA = (props: Props) => {
    return (
        <div>
            <h1>PageA</h1>
            <Outlet />
        </div>
    );
};