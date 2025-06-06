import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Pomodoro from "../components/Pomodoro";

import { CiCalendarDate } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";

const activeProps = { style: { color: "red" } };

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className='topdiv'></div>
      <div className='topdivbottom'></div>
      
     
    
        <div className="w-100 h-28 bg-wood-light border-5 border-wood-border rounded-[50px] absolute mx-auto left-0 right-0 top-[5px]">
          <div className="h-[102px] border-6 border-wood-light rounded-[46px] bg-wood-primary">
            <div className="m-[5px] border-accent-white border-3 h-[81px] rounded-[34px] border-dashed text-center font-cursive font-bold text-dark-white text-[40px] pt-2 text-shadow-wood-border text-shadow-lg text-shadow-">Pomodoro Diary</div>
          </div>
        </div>
      
      <div className="flex">
        <Pomodoro />

        <div className="ml-8 text-light-brown mt-[56px]">
          
          <div className="flex ml-8">


            
            

            <Link to="/todo" activeProps={activeProps}>
              {({isActive}) => <><CiCircleCheck className={`size-10 hover:bg-light-pink active:bg-primary-pink rounded-t-md absolute top-[155px] left-[530px] duration-100 ease-linear ${isActive ? 'bg-primary-pink' : 'bg-primary-white'}`}/></>}
            </Link>

            
            <Link to="/calendar" activeProps={activeProps}>
              {({isActive}) => <><CiCalendarDate className={`size-10 hover:bg-light-pink active:bg-primary-pink rounded-t-md absolute top-[155px] left-[580px] duration-100 ease-linear ${isActive ? 'bg-primary-pink' : 'bg-primary-white'}`}/></>}
            </Link>
        
            <Link to="/statistics" activeProps={activeProps}>
              {({isActive}) => <><CiViewBoard className={`size-10 hover:bg-light-pink active:bg-primary-pink rounded-t-md absolute top-[155px] left-[630px] duration-100 ease-linear ${isActive ? 'bg-primary-pink' : 'bg-primary-white'}`}/></>}
            </Link>

            <Link to="/profile" activeProps={activeProps}>
              {({isActive}) => <><CiUser className={`size-10 hover:bg-light-pink active:bg-primary-pink rounded-t-md absolute top-[155px] left-[680px] duration-100 ease-linear ${isActive ? 'bg-primary-pink' : 'bg-primary-white'}`}/></>}
            </Link>

            <Link to="/settings" activeProps={activeProps}>
              {({isActive}) => <><CiSettings className={`size-10 hover:bg-light-pink active:bg-primary-pink rounded-t-md absolute top-[155px] left-[730px] duration-100 ease-linear ${isActive ? 'bg-primary-pink' : 'bg-primary-white'}`}/></>}
            </Link>
          </div>
          





          <Outlet />

        </div>
      </div>

      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
