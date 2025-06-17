import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Pomodoro from "../components/Pomodoro";


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

        <div className="ml-8 mt-[56px]">
          
          
          
          

          <div className="flex bg-[url(img/diary.PNG)] w-260 bg-contain h-130 mr-[30px] font-bubbly text-[14px]">

            <div className="flex text-light-brown flex-row gap-2 ">


            
            

            <Link to="/todo" activeProps={activeProps} className="ml-16 w-11 h-5">
              {({isActive}) => <><img src={todosIcon} className={`border-4 border-b-0 border-primary-pink rounded-t-lg  ${isActive ? 'bg-primary-white -mt-[14px]' : 'bg-light-pink pb-2 h-12 -mt-[25px]'}`}/></>}
            </Link>

            
            <Link to="/calendar" activeProps={activeProps} className="min-w-11 h-5">
              {({isActive}) => <><img src={calendarIcon} className={`border-4 border-b-0 border-primary-pink rounded-t-lg h-10 ${isActive ? 'bg-primary-white -mt-[14px] ' : 'bg-light-pink pb-2 h-12 -mt-[25px]'}`}/></>}
            </Link>
        
            <Link to="/statistics" activeProps={activeProps} className="min-w-11 h-5">
              {({isActive}) => <><img src={statisticsIcon} className={`border-4 border-b-0 border-primary-pink rounded-t-lg h-10 ${isActive ? 'bg-primary-white -mt-[14px] ' : 'bg-light-pink pb-2 h-12 -mt-[25px]'}`}/></>}
            </Link>

            <Link to="/profile" activeProps={activeProps} className="min-w-11 h-5">
              {({isActive}) => <><img src={profileIcon} className={`border-4 border-b-0 border-primary-pink rounded-t-lg h-10 ${isActive ? 'bg-primary-white -mt-[14px] ' : 'bg-light-pink pb-2 h-12 -mt-[25px]'}`}/></>}
            </Link>

            <Link to="/settings" activeProps={activeProps} className="min-w-11 h-5">
              {({isActive}) => <><img src={settingsIcon} className={`border-4 border-b-0 border-primary-pink rounded-t-lg h-10 ${isActive ? 'bg-primary-white -mt-[14px] ' : 'bg-light-pink pb-2 h-12 -mt-[25px]'}`}/></>}
            </Link>
          </div>


            <Outlet />
          </div>

          

          
          
         
        </div> 
      </div>
     
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
