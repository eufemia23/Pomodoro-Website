import { useState } from "react";
import LogInModal from "./LogInModal";

const ProfileNotLoggedIn = () => {
  const [showLogInModal, setShowLogInModal] = useState(false)

  const handleSignUpClick = () => {
    setShowLogInModal(true)
  }
  const handleLogInClick = () => {
    setShowLogInModal(true)
  }



  return (
    <>

      <div className="w-125 -ml-140 px-20 mt-10">
        <div className="border-3 rounded-md border-primary-pink w-100 p-2 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white text-light-brown flex justify-center items-center align-middle">
          <div className="bg-primary-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-wood-warm border-3 rounded-[5px] px-5 py-2 hover:cursor-pointer duration-100 ease-linear mb-1 active:mb-0 active:shadow-none hover:bg-accent-green active:border-accent-dark-green active:bg-accent-green mx-2" onClick={handleSignUpClick}>
            Sign up
          </div>

          <div className="bg-primary-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-wood-warm border-3 rounded-[5px] px-5 py-2 hover:cursor-pointer duration-100 ease-linear mb-1 active:mb-0 active:shadow-none hover:bg-accent-green active:border-accent-dark-green active:bg-accent-green mx-2" onClick={handleLogInClick}>
            Log in
          </div>
        </div>
      </div>


      
      <div className="w-125 px-15 py-10">right side</div>
      {showLogInModal && (
        <LogInModal
          onClose={() => setShowLogInModal(false)}
        />
      )}
    </>
  );
};

export default ProfileNotLoggedIn;
