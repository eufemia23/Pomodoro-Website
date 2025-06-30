import { useState } from "react";
import StatisticsLoggedIn from "./StatisticsLoggedIn";
import StatisticsNotLoggedIn from "./StatisticsNotLoggedIn";


const Statistics = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <h2 className="text-primary-white text-3xl font-cursive -mt-8.5 ml-37">
        Statistics
      </h2>


      <div>
        {isLoggedIn ? <StatisticsLoggedIn /> : <StatisticsNotLoggedIn />}
      </div>
      
    </>
  );
};

export default Statistics;
