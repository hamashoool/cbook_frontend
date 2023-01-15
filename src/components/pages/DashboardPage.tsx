// @flow
import * as React from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import {Sidebar} from "../dashboard/Sidebar";
import {ContentContainer} from "../dashboard/ContentContainer";
import {SidebarToggleProvider} from "../../context/SidebarToggleContext";

type Props = {

};
export const DashboardPage = (props: Props) => {

    return (
        <SidebarToggleProvider>
            <div className='flex flex-row bg-gray-200 dark:bg-gray-700'>
                <Sidebar />
                <ContentContainer />
                <Routes>
                    <Route index element={ <Outlet /> } />
                </Routes>
            </div>
        </SidebarToggleProvider>
    );
};