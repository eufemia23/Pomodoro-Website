import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Timer from "../components/Timer";
import Pomodoro from "../components/Pomodoro";

const activeProps = { style: { fontWeight: "bold" } };

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <h1>Pomodoro Diary</h1>
      <div class="flex">
        <Pomodoro />

        <div>
          <Link to="/todo" activeProps={activeProps} class="">
            Todo
          </Link>
          <Link to="/calendar" activeProps={activeProps}>
            {({ isActive }) => <>Calendar {isActive && "~"}</>}
          </Link>
          <Link to="/statistics" activeProps={activeProps}>
            {({ isActive }) => <>Statistics {isActive && "~"}</>}
          </Link>
          <Link to="/profile" activeProps={activeProps}>
            {({ isActive }) => <>Profile {isActive && "~"}</>}
          </Link>
          <Link to="/settings" activeProps={activeProps}>
            {({ isActive }) => <>Settings {isActive && "~"}</>}
          </Link>

          <Outlet />

        </div>
      </div>

      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
