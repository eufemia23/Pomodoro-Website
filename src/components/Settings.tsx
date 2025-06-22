import { useState, type SetStateAction } from "react";

const Settings = () => {
  const [inputValuePom, setInputValuePom] = useState(25);

  const handleSubmitPom = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setInputValuePom(inputValuePom);
  };

  const handleChangePom = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValuePom(e.target.value.replace(/\D/g, ""));
  };

  const [inputValueBreak, setInputValueBreak] = useState(5);

  const handleSubmitBreak = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setInputValueBreak(inputValueBreak);
  };

  const handleChangeBreak = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValueBreak(e.target.value.replace(/\D/g, ""));
  };

  const handlePomPlusClick = () => {
    const valuePom = +inputValuePom;
    if (valuePom < 99) {
      setInputValuePom(valuePom + 1);
    }
  };

  const handlePomMinusClick = () => {
    const valuePom = +inputValuePom;
    if (valuePom > 0) {
      setInputValuePom(valuePom - 1);
    }
  };

  const handleBreakPlusClick = () => {
    const valueBreak = +inputValueBreak;
    if (valueBreak < 99) {
      setInputValueBreak(valueBreak + 1);
    }
  };

  const handleBreakMinusClick = () => {
    const valueBreak = +inputValueBreak;
    if (valueBreak > 0) {
      setInputValueBreak(valueBreak - 1);
    }
  };

  return (
    <>
      <h2 className="text-primary-white text-3xl font-cursive -mt-8.5 ml-38">
        Settings
      </h2>

      <div className="w-130 -ml-140 my-10 text-light-brown">
        <div className="text-[14px] mb-3">
          <h2 className="mx-auto w-max text-2xl font-bold mb-3">
            Timer Settings
          </h2>
          <div className="ml-17.5">
            <form onSubmit={handleSubmitPom}>
              <label htmlFor="pomodoroTime" className="block">
                Change pomodoro time
              </label>

              <button
                type="button"
                className="border-3 rounded-md border-r-0 rounded-r-none border-primary-pink w-8 py-1 outline-0 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white mt-2 duration-100 ease-linear hover:cursor-pointer active:inset-shadow-light-pink ml-5"
                onClick={handlePomPlusClick}
              >
                +
              </button>
              <input
                id="pomodoroTime"
                value={inputValuePom}
                onChange={handleChangePom}
                type="text"
                maxLength={2}
                className="border-3 border-primary-pink py-1 px-2 outline-0 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white mt-2 w-10"
              ></input>
              <button
                type="button"
                className="border-3 rounded-md border-l-0 rounded-l-none border-primary-pink w-8 py-1 outline-0 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white mt-2 duration-100 ease-linear hover:cursor-pointer active:inset-shadow-light-pink"
                onClick={handlePomMinusClick}
              >
                -
              </button>
              <div className="inline ml-3">minutes</div>
              <button
                type="submit"
                className="shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-3 rounded-[5px] px-5 py-[3px] hover:cursor-pointer ml-10 duration-100 ease-linear active:shadow-none hover:bg-light-pink active:bg-light-pink active:border-primary-pink"
              >
                OK
              </button>
            </form>

            <div className="text-[14px] mt-7">
              <form onSubmit={handleSubmitBreak}>
                <label htmlFor="breakTime" className="block">
                  Change break time
                </label>
                <button
                  type="button"
                  className="border-3 rounded-md border-r-0 rounded-r-none border-primary-pink w-8 py-1 outline-0 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white mt-2 duration-100 ease-linear hover:cursor-pointer active:inset-shadow-light-pink ml-5"
                  onClick={handleBreakPlusClick}
                >
                  +
                </button>
                <input
                  id="breakTime"
                  value={inputValueBreak}
                  onChange={handleChangeBreak}
                  type="text"
                  maxLength={2}
                  className="border-3 border-primary-pink w-10 py-1 pl-2 outline-0 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white mt-2"
                ></input>
                <button
                  type="button"
                  className="border-3 rounded-md border-l-0 rounded-l-none border-primary-pink w-8 py-1 outline-0 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white mt-2 duration-100 ease-linear hover:cursor-pointer active:inset-shadow-light-pink"
                  onClick={handleBreakMinusClick}
                >
                  -
                </button>
                <div className="inline ml-3">minutes</div>

                <button
                  type="submit"
                  className="shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-3 rounded-[5px] px-5 py-[3px] hover:cursor-pointer ml-10 duration-100 ease-linear active:shadow-none hover:bg-light-pink active:bg-light-pink active:border-primary-pink"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>

        <h2 className="mx-auto w-max text-2xl font-bold mb-3 mt-10">
          Alarm Settings
        </h2>
        <div className="ml-17.5">
          <div>Start pomodoro alarm</div>
          <div>Finish pomodoro alarm</div>
        </div>
      </div>

      <div className="w-125 px-15 py-10 mr-5">
        <div className=" text-light-brown">
          <div className="text-[14px] mb-3">
            <h2 className="mx-auto w-max text-2xl font-bold mb-3">
              Calendar Settings
            </h2>
            <div className="">
              <div>Calendar starting day</div>
            </div>

            <h2 className="mx-auto w-max text-2xl font-bold mb-3 mt-10">
              Profile Settings
            </h2>
            <div className="">
              <div>Change Password</div>
              <div>Change Email</div>
              <div>Log out</div>
              <div>Delete Account</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
