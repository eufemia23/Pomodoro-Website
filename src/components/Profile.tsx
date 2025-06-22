import { useState } from "react";
import ProfileLoggedIn from "./ProfileLoggedIn";
import ProfileNotLoggedIn from "./ProfileNotLoggedIn";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <h2 className="text-primary-white text-3xl font-cursive -mt-8.5 ml-41">
        Profile
      </h2>

      {isLoggedIn ? <ProfileLoggedIn /> : <ProfileNotLoggedIn />}
    </>
  );
};

export default Profile;
