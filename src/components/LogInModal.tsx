import { useRef } from "react";
import { IoClose } from "react-icons/io5";

const LogInModal = ({ onClose, isLoggedIn, setIsLoggedIn }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const onLogInClick = () => {
    setIsLoggedIn(true)
  }

 
  
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 backdrop-blur-sm bg-blend-darken bg-black/30 text-primary-brown flex justify-center items-center"
    >
      <div className="border-[3.5px] border-wood-shadow bg-wood-warm rounded-[30px] inset-shadow-[0px_0px_3px_rgba(0,0,0,0.3)] h-55">
        <div className="border-[3.5px] border-wood-shadow bg-wood-warm rounded-[23px] m-[5px] inset-shadow-[0px_0px_5px_rgba(0,0,0,0.3)] shadow-[0px_0px_2px_rgba(0,0,0,0.4)] h-51">
          <div className="m-[5px] border-darker-white border-3 rounded-[17px] border-dashed shadow-[0px_5px_10px_rgba(0,0,0,0.3)] h-46.5">
            <div className="bg-primary-white m-1 rounded-[13px] inset-shadow-[0px_0px_5px_rgba(65,44,31,0.8)] font-bubbly text-wood-primary  h-43">
              <div className="flex justify-end h-10">
                <button
                  className="p-3 text-[20px] hover:text-[23px] duration-100 ease-linear hover:cursor-pointer active:text-primary-pink "
                  onClick={onClose}
                >
                  <IoClose />
                </button>
              </div>
              <div className="px-7 text-center text-[15px]">
                <div>You are currently accessing a demo version of the website. The login feature hasn't been implemented yet. Do you wish to proceed to a profile mockup?</div>
                <div className="mt-4 flex justify-center">
                  <button
                    className="shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-light-brown border-3 rounded-[5px] text-light-brown font-bubbly hover:cursor-pointer mx-3 px-4 duration-100 ease-linear  active:shadow-none active:mt-0.5  hover:bg-accent-green active:border-accent-dark-green active:bg-accent-green h-9"
                    onClick={onLogInClick}
                  >
                    Yes
                  </button>
                  <button
                    className="shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-light-brown border-3 rounded-[5px] text-light-brown font-bubbly hover:cursor-pointer mx-3 px-4 duration-100 ease-linear  active:shadow-none active:mt-0.5 hover:bg-light-pink active:border-primary-pink active:bg-light-pink  h-9"
                    onClick={onClose}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
