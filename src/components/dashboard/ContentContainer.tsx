// @flow 
import * as React from 'react';
import {TopNavigation} from "./TopNavigation";
import { useSidebarToggle} from "../../context/SidebarToggleContext";
import {Outlet} from "react-router-dom";

type Props = {
};
export const ContentContainer = ({  }: Props) => {
    const {isOpen} = useSidebarToggle();

    return (
        <div className={`content-container ${!isOpen ? 'ml-[4rem]' : 'ml-[20%]'} anim`}>
            <TopNavigation />
            <div className='content-list'>
                <Outlet />
            </div>
        </div>
    );
};