import { useState } from "react";
import ProfileLoggedIn from "./ProfileLoggedIn";
import ProfileNotLoggedIn from "./ProfileNotLoggedIn";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <h2 className="text-primary-white text-3xl font-cursive -mt-8.5 ml-28">
        Profile
      </h2>

      {isLoggedIn ? 
      <ProfileLoggedIn /> 
      : 
      <ProfileNotLoggedIn 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn}/>
      }
    </>
  );
};

export default Profile;
