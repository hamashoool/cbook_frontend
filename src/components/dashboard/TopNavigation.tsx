// @flow 
import * as React from 'react';
import {
    FaSearch,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
    FaAlignJustify
} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import useDarkMode from "../../hooks/useDarkMode";
import {useSidebarToggle} from "../../context/SidebarToggleContext";

type Props = {
};
export const TopNavigation = ({  }: Props) => {
    const {isOpen, toggleSidebar} = useSidebarToggle();

    return (
        <div className='top-navigation'>
            {isOpen
                ? <AiOutlineClose size='24' className='title-hashtag' onClick={toggleSidebar}/>
                : <FaAlignJustify size='24' className='title-hashtag' onClick={toggleSidebar}/>
            }

            <Title />
            <ThemeIcon />
            <Search />
            <BellIcon />
            <UserCircle />
        </div>
    );
};

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
      {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
      ) : (
          <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
    );
};

const Search = () => (
    <div className='search'>
        <input className='search-input' type='text' placeholder='Search...' />
        <FaSearch size='18' className='text-secondary my-auto' />
    </div>
);

const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
const Title = () => <h5 className='title-text'>tailwind-css</h5>;