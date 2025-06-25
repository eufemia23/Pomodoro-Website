import { useState, type SetStateAction } from "react";


const ForgotPassword = ({onSendLinkClick, profileMode, setProfileMode}) => {

  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");

  const handleChangeEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValueEmail(e.target.value);
  };
  const handleChangePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValuePassword(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleSwitchClick = () => {
    setProfileMode("login")
  }
  
  return (
    <>
      <div>
          <div className="w-100 mx-auto h-45">
            <div className="text-center mt-3">Enter the email associated with your account, and we'll send you a link to reset your password.</div>
            <form onSubmit={handleSubmit} className="">
              <label htmlFor="email" className="block mt-4 mb-1">
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
              
              

              <button
                type="submit"
                className="bg-primary-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-wood-warm border-3 rounded-[5px] mt-5 py-1 px-[109px] mx-auto hover:cursor-pointer duration-100 ease-linear active:mt-6 active:shadow-none hover:bg-accent-green active:border-accent-dark-green active:bg-accent-green block"
                onClick={onSendLinkClick()}
              >
                Send password reset link
              </button>
            </form>
          </div>
          <div>
            <div className="mt-1 ml-42 hover:cursor-pointer hover:text-[15px] hover:ml-41.5 w-max text-accent-dark-green duration-100 ease-linear" onClick={handleSwitchClick}>
              Go back
            </div>
          </div>
        </div>
    </>
  )
}

export default ForgotPassword