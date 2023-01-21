// @flow
import * as React from "react";
import {
  FaSearch,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaAlignJustify,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import useDarkMode from "../../hooks/useDarkMode";
import { useSidebarToggle } from "../../context/SidebarToggleContext";
import { useMachine } from "@xstate/react";
import { AuthMachine } from "../../machines/authMachine";
import { authStateMachine } from "../../machines/testMachine";
import { LogoutEvent } from "../../interfaces/events";

// type Props = {
// };
export const TopNavigation = () => {
  const { isOpen, toggleSidebar } = useSidebarToggle();
  const [state, send] = useMachine(authStateMachine);

  React.useEffect(() => {
    console.log(state.value);
  }, [state]);

  return (
    <div className="top-navigation">
      {!isOpen ? (
        <AiOutlineClose
          size="24"
          className="title-hashtag"
          onClick={toggleSidebar}
        />
      ) : (
        <FaAlignJustify
          size="24"
          className="title-hashtag"
          onClick={toggleSidebar}
        />
      )}

      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle sendEvent={send} />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
);

const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;

type UserCircleTypes = {
  sendEvent: (event: LogoutEvent) => void;
};
const UserCircle = ({ sendEvent }: UserCircleTypes) => (
  <div className="flex items-center">
    <div className="dropdown dropdown-end p-0">
      <FaUserCircle tabIndex={0} size="24" className="top-navigation-icon" />
      <ul
        tabIndex={0}
        className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
      >
        <li>
          <span onClick={() => sendEvent({ type: "LOGOUT" })}>Sign Out</span>
        </li>
      </ul>
    </div>
  </div>
);
const Title = () => <h5 className="title-text">tailwind-css</h5>;
