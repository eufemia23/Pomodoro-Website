import { useState } from "react";
import { HiArrowTurnDownLeft } from "react-icons/hi2";
import Day from "./Day";
import Calendar from 'react-calendar';

const CalendarTab = () => {
  const [chosenDay, setChosenDay] = useState<number>();

  const handleDayClick = (day: number) => {
    setChosenDay(day);
  };


  return (
    <>
      <h2 className="text-primary-white text-3xl font-cursive -mt-8.5 ml-36.5">
        Calendar
      </h2>
      <div className="w-auto px-1 mt-15 pl-16 font-bubbly -ml-139.5 text-light-brown">
        
        <Calendar />



      </div>
      <div className="ml-3 w-125 rounded-md px-4 font-bubbly">
        <Day chosenDay={chosenDay}/>
        
      </div>
    
    </>
  );
};

export default CalendarTab;
