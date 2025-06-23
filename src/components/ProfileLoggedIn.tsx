import { useState } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import EditProfileModal from "./EditProfileModal";

import AvatarGLD from "../img/avatars/avatar-gld.PNG";
import AvatarGLL from "../img/avatars/avatar-gll.PNG";
import AvatarGDD from "../img/avatars/avatar-gdd.PNG";
import AvatarGDL from "../img/avatars/avatar-gdl.PNG";
import AvatarBLD from "../img/avatars/avatar-bld.PNG";
import AvatarBLL from "../img/avatars/avatar-bll.PNG";
import AvatarBDD from "../img/avatars/avatar-bdd.PNG";
import AvatarBDL from "../img/avatars/avatar-bdl.PNG";

const ProfileLoggedIn = () => {
  let inputValueNameStored;

  if (localStorage.getItem("storedUserName")) {
    inputValueNameStored = JSON.parse(localStorage.storedUserName);
  } else {
    inputValueNameStored = "Aurelia";
  }

  let inputValueBioStored;

  if (localStorage.getItem("storedUserBio")) {
    inputValueBioStored = JSON.parse(localStorage.storedUserBio);
  } else {
    inputValueBioStored = "Hi! I'm Aurelia and I love my two cats Mabel and Lain and studying! Add me on my GitHub @eufemia23";
  }

  let avatarStored;

  if (localStorage.getItem("storedUserAvatar")) {
    avatarStored = JSON.parse(localStorage.storedUserAvatar);
  } else {
    avatarStored = AvatarGLL;
  }



  const [userName, setUserName] = useState(inputValueNameStored);
  const [userUsername, setUserUsername] = useState("eufemia23");
  const [userAvatar, setUserAvatar] = useState(avatarStored);
  const [userBio, setUserBio] = useState(inputValueBioStored);

  const [friends, setFriends] = useState([
    "Alicia",
    "Anastasia",
    "Whimsy",
    "Eliza",
  ]);

  function handleRemove(index: number): void {
    throw new Error("Function not implemented.");
  }

  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  return (
    <>
      <div className="w-125 -ml-140 px-20 mt-10 text-light-brown">
        <div className="border-3 rounded-md border-primary-pink w-100 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white">
          <div className="flex">
            <div className="m-2 ml-4 w-23">
              <img src={userAvatar}></img>
            </div>
            <div className="mt-6">
              <div className="font-super-cursive font-extrabold text-[30px]">
                {userName}
              </div>
              <div className="ml-1">{userUsername}</div>
            </div>
            <div className="pl-42 pt-2">
              <MdEdit
                className="text-[20px] hover:text-[23px] hover:cursor-pointer duration-100 ease-linear active:text-[23px] active:text-accent-dark-green"
                onClick={handleEditClick}
              />
            </div>
          </div>

          <div className="font-bubbly bg-primary-white mx-5 mb-3 shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-3 rounded-[5px] border-wood-warm py-2 px-3">
            <div>{userBio}</div>
          </div>
        </div>
      </div>

      <div className="w-125 px-15 py-10 text-light-brown">
        <div className="border-3 rounded-md border-primary-pink w-100 py-1 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white flex justify-center duration-100 ease-linear mb-1 hover:cursor-pointer hover:text-white active:shadow-none active:mt-0.5 active:mb-0.5">
          <div>Find more friends!</div>
        </div>

        <div>
          <div className="pt-3 mb-2 ml-4">Your Friends</div>
          <div className="w-104 border-b-2 border-primary-pink"></div>

          {friends.map((friend, index) => (
            <div key={index} className="w-104 border-b-2 border-primary-pink">
              <div className="grid grid-cols-5 w-104">
                <div>
                  <img
                    className="w-10 my-1 ml-2 hover:cursor-pointer"
                    src={AvatarGLD}
                  ></img>
                </div>

                <div className="mt-3.5 row-spa">{friend}</div>
                <div className="mt-3.5 ml-5">Online</div>
                <div className="mt-3.5 ml-5">10:00</div>
                <div className="mt-3.5 ml-10">
                  <button key={index} onClick={() => handleRemove(index)}>
                    <FaHeartBroken className="size-5 hover:size-6 duration-100 ease-linear hover:cursor-pointer active:text-primary-pink active:size-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
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
        />
      )}
    </>
  );
};

export default ProfileLoggedIn;
