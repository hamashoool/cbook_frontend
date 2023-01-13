// create toggle context in typescript

import React, { createContext, useState } from 'react';

export const SidebarToggleContext = createContext({} as any)

export function useSidebarToggle() {
    return React.useContext(SidebarToggleContext)
}

export const SidebarToggleProvider = ({ children }: any) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <SidebarToggleContext.Provider value={{ isOpen, toggleSidebar }}>
            {children}
        </SidebarToggleContext.Provider>
    );
};
