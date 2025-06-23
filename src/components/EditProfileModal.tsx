import { useRef, useState, type SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import AvatarGLD from "../img/avatars/avatar-gld.PNG";
import AvatarGLL from "../img/avatars/avatar-gll.PNG";
import AvatarGDD from "../img/avatars/avatar-gdd.PNG";
import AvatarGDL from "../img/avatars/avatar-gdl.PNG";
import AvatarBLD from "../img/avatars/avatar-bld.PNG";
import AvatarBLL from "../img/avatars/avatar-bll.PNG";
import AvatarBDD from "../img/avatars/avatar-bdd.PNG";
import AvatarBDL from "../img/avatars/avatar-bdl.PNG";

const EditProfileModal = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [inputValueName, setInputValueName] = useState("Aurelia");

  const handleChangeName = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValueName(e.target.value);
  };

  const [inputValueBio, setInputValueBio] = useState("");

  const handleChangeBio = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValueBio(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputValueName.trim()) {
      setInputValueName("");
    }
  };

  const [chosenAvatar, setChosenAvatar] = useState<number>();

  const handleAvatarClick = (avatarIndex: number) => {
    setChosenAvatar(avatarIndex);
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 backdrop-blur-sm bg-blend-darken bg-black/30 text-primary-brown flex justify-center items-center"
    >
      <div className="border-[3.5px] border-wood-shadow bg-wood-warm rounded-[30px] inset-shadow-[0px_0px_3px_rgba(0,0,0,0.3)] h-150">
        <div className="border-[3.5px] border-wood-shadow bg-wood-warm rounded-[23px] m-[5px] inset-shadow-[0px_0px_5px_rgba(0,0,0,0.3)] shadow-[0px_0px_2px_rgba(0,0,0,0.4)] h-146">
          <div className="m-[5px] border-darker-white border-3 rounded-[17px] border-dashed shadow-[0px_5px_10px_rgba(0,0,0,0.3)] h-141.5">
            <div className="bg-primary-white m-1 rounded-[13px] inset-shadow-[0px_0px_5px_rgba(65,44,31,0.8)] font-bubbly text-wood-primary  h-138">
              <div className="flex justify-end">
                <button
                  className="pt-3 h-4 pr-3 text-[20px] hover:text-[23px] duration-100 ease-linear hover:cursor-pointer active:text-primary-pink "
                  onClick={onClose}
                >
                  <IoClose />
                </button>
              </div>
              <div className="px-7">
                <h1 className="text-[20px]">Edit your profile</h1>

                <div>
                  <form onSubmit={handleSubmit} className="">
                    <label className="block mt-2 mb-1">Name</label>
                    <input
                      value={inputValueName}
                      onChange={handleChangeName}
                      type="text"
                      placeholder="Insert your new name"
                      className="border-3 rounded-md border-primary-pink w-100 py-1 pl-2 outline-0 bg-light-pink pr-12 shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white"
                    />

                    <label className="block mt-4 mb-1">Biography</label>
                    <textarea
                      value={inputValueBio}
                      onChange={handleChangeBio}
                      rows="5"
                      placeholder="Insert your new bio"
                      className="border-3 rounded-md border-primary-pink w-100 py-1 pl-2 outline-0 bg-light-pink pr-12 shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white"
                    />

                    <div>
                      <div className="mt-3 mb-1">Choose your avatar</div>
                      <div className="mx-4 grid grid-cols-4 gap-x-3 gap-y-1">
                        <div
                          className={`h-[84px] rounded-full flex justify-center items-center ${chosenAvatar === 1 ? "bg-accent-dark-green" : "bg-primary-white"}`}
                        >
                          <div>
                            <img
                              className="h-19 hover:cursor-pointer hover:h-20 duration-100 ease-linear"
                              onClick={() => handleAvatarClick(1)}
                              src={AvatarGLD}
                            ></img>
                          </div>
                        </div>

                        <div
                          className={`h-[84px] rounded-full flex justify-center items-center ${chosenAvatar === 2 ? "bg-accent-dark-green" : "bg-primary-white"}`}
                        >
                          <div>
                            <img
                              className="h-19 hover:cursor-pointer hover:h-20 duration-100 ease-linear"
                              onClick={() => handleAvatarClick(2)}
                              src={AvatarGLL}
                            ></img>
                          </div>
                        </div>

                        <div
                          className={`h-[84px] rounded-full flex justify-center items-center ${chosenAvatar === 3 ? "bg-accent-dark-green" : "bg-primary-white"}`}
                        >
                          <div>
                            <img
                              className="h-19 hover:cursor-pointer hover:h-20 duration-100 ease-linear"
                              onClick={() => handleAvatarClick(3)}
                              src={AvatarGDD}
                            ></img>
                          </div>
                        </div>

                        <div
                          className={`h-[84px] rounded-full flex justify-center items-center ${chosenAvatar === 4 ? "bg-accent-dark-green" : "bg-primary-white"}`}
                        >
                          <div>
                            <img
                              className="h-19 hover:cursor-pointer hover:h-20 duration-100 ease-linear"
                              onClick={() => handleAvatarClick(4)}
                              src={AvatarGDL}
                            ></img>
                          </div>
                        </div>

                        <div
                          className={`h-[84px] rounded-full flex justify-center items-center ${chosenAvatar === 5 ? "bg-accent-dark-green" : "bg-primary-white"}`}
                        >
                          <div>
                            <img
                              className="h-19 hover:cursor-pointer hover:h-20 duration-100 ease-linear"
                              onClick={() => handleAvatarClick(5)}
                              src={AvatarBLD}
                            ></img>
                          </div>
                        </div>

                        <div
                          className={`h-[84px] rounded-full flex justify-center items-center ${chosenAvatar === 6 ? "bg-accent-dark-green" : "bg-primary-white"}`}
                        >
                          <div>
                            <img
                              className="h-19 hover:cursor-pointer hover:h-20 duration-100 ease-linear"
                              onClick={() => handleAvatarClick(6)}
                              src={AvatarBLL}
                            ></img>
                          </div>
                        </div>

                        <div
                          className={`h-[84px] rounded-full flex justify-center items-center ${chosenAvatar === 7 ? "bg-accent-dark-green" : "bg-primary-white"}`}
                        >
                          <div>
                            <img
                              className="h-19 hover:cursor-pointer hover:h-20 duration-100 ease-linear"
                              onClick={() => handleAvatarClick(7)}
                              src={AvatarBDD}
                            ></img>
                          </div>
                        </div>

                        <div
                          className={`h-[84px] rounded-full flex justify-center items-center ${chosenAvatar === 8 ? "bg-accent-dark-green" : "bg-primary-white"}`}
                        >
                          <div>
                            <img
                              className="h-19 hover:cursor-pointer hover:h-20 duration-100 ease-linear"
                              onClick={() => handleAvatarClick(8)}
                              src={AvatarBDL}
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex justify-center">
                      <button
                        className="shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-light-brown border-3 rounded-[5px] text-light-brown font-bubbly hover:cursor-pointer mx-3 px-4 duration-100 ease-linear  active:shadow-none active:mt-0.5  hover:bg-light-pink active:border-primary-pink active:bg-light-pink h-9"
                        onClick={onClose}
                      >
                        CANCEL
                      </button>
                      <button
                        className="shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-light-brown border-3 rounded-[5px] text-light-brown font-bubbly hover:cursor-pointer mx-3 px-4 duration-100 ease-linear  active:shadow-none active:mt-0.5  hover:bg-accent-green active:border-accent-dark-green active:bg-accent-green h-9"
                        onClick={onClose}
                        type="submit"
                      >
                        CONFIRM
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
