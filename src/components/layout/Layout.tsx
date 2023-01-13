// @flow
import * as React from 'react';
import {Outlet} from "react-router-dom";
import {DashboardPage} from "../pages/DashboardPage";


type Props = {

};
export const Layout = (props: Props) => {
    return (
        <>
            <DashboardPage />
            {/*<Outlet />*/}
        </>
    );
};