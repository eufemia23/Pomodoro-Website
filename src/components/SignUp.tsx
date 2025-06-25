import { useState, type SetStateAction } from "react";
import EditProfileModal from "./EditProfileModal";
import AvatarGLD from "../img/avatars/avatar-gld.PNG";

const SignUp = ({ onSignUpClick, setProfileMode, isLoggedIn, setIsLoggedIn }) => {

  const [inputValueUsername, setInputValueUsername] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");
  const [inputValueConfirmPassword, setInputValueConfirmPassword] = useState("");

 

  const handleChangeUsername = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValueUsername(e.target.value);
  };

  const handleChangeEmail = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValueEmail(e.target.value);
  };

  const handleChangePassword = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValuePassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValueConfirmPassword(e.target.value);
  };






  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleSwitchClick = () => {
    setProfileMode("login")
  }




  
  const [userName, setUserName] = useState("");
  const [userUsername, setUserUsername] = useState("eufemia23");
  const [userAvatar, setUserAvatar] = useState(AvatarGLD);
  const [userBio, setUserBio] = useState("");



  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  return (
    <>
      <div>
        <div className="w-max mx-auto h-75">
          <form onSubmit={handleSubmit} className="">



            

            <label htmlFor="username" className="block mt-1 mb-0">
              Username
            </label>
            <input
              id="username"
              value={inputValueUsername}
              onChange={handleChangeUsername}
              type="text"
              placeholder="Enter username"
              className="border-3 rounded-md border-primary-pink w-100 py-1 pl-2 outline-white focus:outline-3 bg-light-pink pr-12 shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white"
            />

            <label htmlFor="email" className="block mt-2 mb-0">
              Email
            </label>
            <input
              id="email"
              value={inputValueEmail}
              onChange={handleChangeEmail}
              type="email"
              placeholder="Enter email"
              className="border-3 rounded-md border-primary-pink w-100 py-1 pl-2 outline-white focus:outline-3 bg-light-pink pr-12 shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white"
            />

            <label htmlFor="password" className="block mt-2 mb-0">
              Password
            </label>
            <input
              id="password"
              value={inputValuePassword}
              onChange={handleChangePassword}
              type="password"
              placeholder="Enter password"
              className="border-3 rounded-md border-primary-pink w-100 py-1 pl-2 outline-white focus:outline-3 bg-light-pink pr-12 shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white"
            />

            <label htmlFor="confirmPassword" className="block mt-2 ">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              value={inputValueConfirmPassword}
              onChange={handleChangeConfirmPassword}
              type="password"
              placeholder="Confirm password"
              className="border-3 rounded-md border-primary-pink w-100 py-1 pl-2 outline-white focus:outline-3 bg-light-pink pr-12 shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white"
            />
            

            <button
              type="submit"
              className="bg-primary-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-wood-warm border-3 rounded-[5px] mt-4 py-1 px-33 mx-auto hover:cursor-pointer duration-100 ease-linear active:mt-5 active:shadow-none hover:bg-accent-green active:border-accent-dark-green active:bg-accent-green block"
              onClick={handleEditClick}
            >
              Create an account
            </button>
          </form>
        </div>
        <div>
          <div className="w-max mx-auto mt-5 pl-15">Already have an account?</div>
          <div className="mt-1 ml-44 hover:cursor-pointer hover:text-[15px] hover:ml-43.5 w-max text-accent-dark-green duration-100 ease-linear" onClick={handleSwitchClick}>
            Log In
          </div>
        </div>
      </div>


      {showEditModal && (
        <EditProfileModal
          onClose={() => setShowEditModal(false)}
          userName={userName}
          setUserName={setUserName}
          userBio={userBio}
          setUserBio={setUserBio}
          userAvatar={userAvatar}
          setUserAvatar={setUserAvatar}
          mode="start"
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
};

export default SignUp;
