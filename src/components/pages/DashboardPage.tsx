// @flow
import * as React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Sidebar } from "../dashboard/Sidebar";
import { ContentContainer } from "../dashboard/ContentContainer";
import {
  SidebarToggleProvider,
  useSidebarToggle,
} from "../../context/SidebarToggleContext";
import { TopNavigation } from "../dashboard/TopNavigation";
import { Breadcrumbs } from "@material-tailwind/react";
import { useSiteMachine } from "../../hooks/useSiteMachine";

type Props = {};
export const DashboardPage = (props: Props) => {
  const { isOpen } = useSidebarToggle();

  return (
    <SidebarToggleProvider>
      <div className="flex flex-row bg-gray-200 dark:bg-gray-700">
        <Sidebar />
        <ContentContainer />

        {/* <div
          className={`content-container ${
            isOpen ? "ml-[4rem]" : "ml-[20%]"
          } anim`}
        >
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

          <div className="content-list">
            <Outlet />
          </div>
        </div> */}

        <Routes>
          <Route index element={<Outlet />} />
        </Routes>
      </div>
    </SidebarToggleProvider>
  );
};
