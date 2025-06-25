import { useState, type SetStateAction } from "react";


const LogIn = ({onLogInClick, profileMode, setProfileMode}) => {

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
    setProfileMode("signup")
  }
  
  return (
    <>
      <div>
          <div className="w-max mx-auto h-55">
            <form onSubmit={handleSubmit} className="">
              <label htmlFor="email" className="block mt-2 mb-1">
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
              <label htmlFor="password" className="block mt-4 mb-1">
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
              <div className="duration-100 ease-linear mt-3 hover:cursor-pointer hover:text-[15px] ml-67 h-6  hover:ml-66">
                Forgot password?
              </div>

              <button
                type="submit"
                className="bg-primary-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-wood-warm border-3 rounded-[5px] mt-3 py-1 px-44 mx-auto hover:cursor-pointer duration-100 ease-linear active:mt-4 active:shadow-none hover:bg-accent-green active:border-accent-dark-green active:bg-accent-green block"
                onClick={onLogInClick()}
              >
                Log in
              </button>
            </form>
          </div>
          <div>
            <div className="w-max mx-auto mt-5 pl-15">
              New to Pomodoro Diary?
            </div>
            <div className="mt-1 ml-33 hover:cursor-pointer hover:text-[15px] hover:ml-32 w-max text-accent-dark-green duration-100 ease-linear" onClick={handleSwitchClick}>
              Create an account
            </div>
          </div>
        </div>
    </>
  )
}

export default LogIn