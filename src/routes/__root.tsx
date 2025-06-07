import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Pomodoro from "../components/Pomodoro";

import { CiCalendarDate } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";

import todosIcon from '../img/todosicon.PNG';
import calendarIcon from '../img/calendaricon.PNG';
import statisticsIcon from '../img/statisticsicon.PNG';
import profileIcon from '../img/profileicon.PNG';
import settingsIcon from '../img/settingsicon.PNG';

const activeProps = { style: {  } };

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className='topdiv'></div>
      <div className='topdivbottom'></div>
      
     
    
        <div className="shadow-[0px_5px_10px_rgba(0,0,0,0.5)]  w-100 h-28 bg-wood-light border-5 border-wood-border rounded-[50px] absolute mx-auto left-0 right-0 top-[5px] ">
          <div className="h-[102px] border-6 border-wood-light rounded-[46px] bg-wood-primary  ">
            <div className="inset-shadow-[0px_5px_10px_rgba(185,147,123,0.5)] m-[5px] border-accent-white border-3 h-[81px] rounded-[34px] border-dashed text-center font-cursive font-bold text-dark-white text-[40px] pt-2 text-shadow-wood-border text-shadow-lg shadow-[0px_5px_10px_rgba(0,0,0,0.5)]">Pomodoro Diary</div>
          </div>
        </div>
      
      <div className="flex">
        <Pomodoro />

        <div className="ml-8 text-light-brown mt-[56px]">
          
          <div className="flex ml-8">


            
            

            <Link to="/todo" activeProps={activeProps}>
              {({isActive}) => <><img src={todosIcon} className={` border-4 border-b-0 border-primary-pink rounded-t-lg absolute left-[530px] h-10 w-11 ${isActive ? 'bg-primary-white top-[157px]' : 'bg-light-pink pb-2 h-12 top-[146px]'}`}/></>}
            </Link>

            
            <Link to="/calendar" activeProps={activeProps}>
              {({isActive}) => <><img src={calendarIcon} className={` border-4 border-b-0 border-primary-pink rounded-t-lg absolute left-[580px] h-10 w-11 ${isActive ? 'bg-primary-white top-[157px]' : 'bg-light-pink pb-2 h-12 top-[146px]'}`}/></>}
            </Link>
        
            <Link to="/statistics" activeProps={activeProps}>
              {({isActive}) => <><img src={statisticsIcon} className={` border-4 border-b-0 border-primary-pink rounded-t-lg absolute left-[630px] h-10 w-11 ${isActive ? 'bg-primary-white top-[157px]' : 'bg-light-pink pb-2 h-12 top-[146px]'}`}/></>}
            </Link>

            <Link to="/profile" activeProps={activeProps}>
              {({isActive}) => <><img src={profileIcon} className={` border-4 border-b-0 border-primary-pink rounded-t-lg absolute left-[680px] h-10 w-11 ${isActive ? 'bg-primary-white top-[157px]' : 'bg-light-pink pb-2 h-12 top-[146px]'}`}/></>}
            </Link>

            <Link to="/settings" activeProps={activeProps}>
              {({isActive}) => <><img src={settingsIcon} className={` border-4 border-b-0 border-primary-pink rounded-t-lg absolute left-[730px] h-10 w-11 ${isActive ? 'bg-primary-white top-[157px]' : 'bg-light-pink pb-2 h-12 top-[146px]'}`}/></>}
            </Link>
          </div>
          





          <Outlet />

        </div>
      </div>

      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
