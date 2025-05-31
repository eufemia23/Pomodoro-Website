import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Pomodoro from "../components/Pomodoro";

import { CiCalendarDate } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";

const activeProps = { style: { fontWeight: "bold" } };

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <h1>Pomodoro Diary</h1>
      <div className="flex">
        <Pomodoro />

        <div className="ml-8 text-light-brown">
          <h2 className="text-primary-pink text-3xl flex items-center justify-center font-cursive mt-5 mb-3">Todo List</h2>
          <div className="flex ml-8">
            <Link to="/todo" activeProps={activeProps}>
              <CiCircleCheck className="bg-primary-white size-10 mr-4 hover:bg-light-pink active:bg-primary-pink rounded-t-md"/>
            </Link>

            <Link to="/calendar" activeProps={activeProps} >
              <CiCalendarDate className="bg-primary-white size-10 mr-4 hover:bg-light-pink active:bg-primary-pink rounded-t-md " />
            </Link>
        
            <Link to="/statistics" activeProps={activeProps} >
              <CiViewBoard className="bg-primary-white size-10 mr-4 hover:bg-light-pink active:bg-primary-pink rounded-t-md " />
            </Link>

            <Link to="/profile" activeProps={activeProps} >
              <CiUser className="bg-primary-white size-10 mr-4 hover:bg-light-pink active:bg-primary-pink rounded-t-md" />
            </Link>

            <Link to="/settings" activeProps={activeProps} >
              <CiSettings className="bg-primary-white size-10 hover:bg-light-pink active:bg-primary-pink rounded-t-md" />
            </Link>
          </div>
          





          <Outlet />

        </div>
      </div>

      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
