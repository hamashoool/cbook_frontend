// @flow 
import * as React from 'react';
import {TopNavigation} from "./TopNavigation";
import { useSidebarToggle} from "../../context/SidebarToggleContext";
import {Link, Outlet} from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";

type Props = {
};
export const ContentContainer = ({  }: Props) => {
    const {isOpen} = useSidebarToggle();

    return (
        <div className={`content-container ${!isOpen ? 'ml-[4rem]' : 'ml-[20%]'} anim`}>
            <TopNavigation />

            <div className="breadcrumbs">
                <Breadcrumbs fullWidth className="dark:bg-gray-800 bg-gray-400">
                    <Link to="#" className="opacity-80 dark:opacity-60">
                        Docs
                    </Link>
                    <Link to="#" className="opacity-80 dark:opacity-60">
                        Components
                    </Link>
                    <Link to="#">Breadcrumbs</Link>
                </Breadcrumbs>
            </div>

            <div className='content-list'>
                <Outlet />
            </div>
        </div>
    );
};