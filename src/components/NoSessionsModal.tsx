import { useRef } from "react";
import { IoClose } from "react-icons/io5";

const NoSessionsModal = ({onClose}) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  }

  return (
    <div ref={modalRef} onClick={closeModal} className="fixed text-primary-brown flex inset-0 pt-95 pl-22 ">
          <div className="border-4 rounded-lg border-primary-pink bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white h-13 text-light-brown font-bubbly">
        
                  <div className="flex justify-end h-3">
                  <button className="pt-1 pr-1 text-[18px] hover:text-[20px] duration-100 ease-linear hover:cursor-pointer active:text-primary-pink " onClick={onClose}>
                    <IoClose  />
                  </button>
                  </div>
                  <div className="text-center text-[15px] pl-3 pr-8">
                    <h1>Add sessions to start the timer!</h1>
                    
                  </div>
                </div>
          </div>
            
  );
};

export default NoSessionsModal;
