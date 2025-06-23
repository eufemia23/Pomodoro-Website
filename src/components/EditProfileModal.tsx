import { useRef, useState, type SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

const EditProfileModal = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [inputValueName, setInputValueName] = useState("");

  const handleChangeName = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValueName(e.target.value);
};

  const [inputValueBio, setInputValueBio] = useState("");

  const handleChangeBio = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValueBio(e.target.value);
  };




  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputValueName.trim()) {
      setInputValueName("");
    }
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
                  className="pt-3 pr-3 text-[20px] hover:text-[23px] duration-100 ease-linear hover:cursor-pointer active:text-primary-pink "
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
                      <div className="grid grid-cols-5 gap-1">
                        <div className="h-19 bg-accent-dark-green rounded-full flex justify-center items-center">
                          <div>avatar1</div>
                        </div>
                        <div className="h-19 bg-accent-dark-green rounded-full flex justify-center items-center">
                          <div>avatar2</div>
                        </div>
                        <div className="h-19 bg-accent-dark-green rounded-full flex justify-center items-center">
                          <div>avatar3</div>
                        </div>
                        <div className="h-19 bg-accent-dark-green rounded-full flex justify-center items-center">
                          <div>avatar4</div>
                        </div>
                        <div className="h-19 bg-accent-dark-green rounded-full flex justify-center items-center">
                          <div>avatar5</div>
                        </div>
                        <div className="h-19 bg-accent-dark-green rounded-full flex justify-center items-center">
                          <div>avatar6</div>
                        </div>
                        <div className="h-19 bg-accent-dark-green rounded-full flex justify-center items-center">
                          <div>avatar7</div>
                        </div>
                        <div className="h-19 bg-accent-dark-green rounded-full flex justify-center items-center">
                          <div>avatar8</div>
                        </div>
                        <div className="h-19 bg-accent-dark-green rounded-full flex justify-center items-center">
                          <div>avatar9</div>
                        </div>
                        <div className="h-19 bg-accent-dark-green rounded-full flex justify-center items-center">
                          <div>avatar10</div>
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
                        onClick={onClose} type="submit"
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
