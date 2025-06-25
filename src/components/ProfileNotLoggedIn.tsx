import { useState } from "react";
import LogInModal from "./LogInModal";
import { FaCheck } from "react-icons/fa6";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

const ProfileNotLoggedIn = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [profileMode, setProfileMode] = useState("login")

  const handleSignUpClick = () => {
    setShowLogInModal(true);
  };
  const handleLogInClick = () => {
    setShowLogInModal(true);
  };
  const handleSendLinkClick = () => {
    setShowLogInModal(true);
  };


  

  return (
    <>
      <div className="w-125 -ml-140 px-20 mt-10 text-light-brown">
        <h2 className="text-2xl font-bold ml-19">
          {profileMode === "login" && "You're not logged in"} {profileMode === "signup" && "Create your account"}
          
        </h2>
        <h2 className="text-2xl font-bold ml-25">{profileMode === "forgotpassword" && "Reset password"}</h2>


        {profileMode === "login" &&
          <LogIn 
            onLogInClick={() => handleLogInClick}
            setProfileMode={setProfileMode}
          />
        }
        {profileMode === "signup" &&
          <SignUp 
            onSignUpClick={() => handleSignUpClick}
            setProfileMode={setProfileMode}
          />
        }
        {profileMode === "forgotpassword" &&
          <ForgotPassword 
            onSendLinkClick={() => handleSendLinkClick}
            setProfileMode={setProfileMode}
          />
        }


      </div>

      <div className="w-125 px-15 py-10 text-light-brown">
        <h2 className="text-2xl font-bold mb-3 ml-3">
          Join to unlock more features!
        </h2>
        <div className="ml-3.5">
          <div className="mb-3">
            <FaCheck className="border-2 rounded-md mr-2 text-accent-dark-green h-5 w-5 inline" />
            <div className="inline align-top">
              Access to your todo list and calendar anywhere
            </div>
          </div>
          <div className="mb-3">
            <FaCheck className="border-2 rounded-md mr-2 text-accent-dark-green h-5 w-5 inline" />
            <div className="inline align-top">
              Personalized statistics and time tracking
            </div>
          </div>
          <div className="mb-3">
            <FaCheck className="border-2 rounded-md mr-2 text-accent-dark-green h-5 w-5 inline" />
            <div className="inline align-top">
              Add friends and see their statistics
            </div>
          </div>
          <div className="mb-3">
            <FaCheck className="border-2 rounded-md mr-2 text-accent-dark-green h-5 w-5 inline" />
            <div className="inline align-top">
              Custom avatar and a cute profile
            </div>
          </div>
          <div className="mb-3">
            <FaCheck className="border-2 rounded-md mr-2 text-accent-dark-green h-5 w-5 inline" />
            <div className="inline align-top">
              Custom character that helps you with studying
            </div>
          </div>
        </div>
      </div>
      {showLogInModal && (
        <LogInModal
          onClose={() => setShowLogInModal(false)}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
};

export default ProfileNotLoggedIn;
