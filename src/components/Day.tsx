const Day = ({ chosenDay }) => {
  return (
    <>
      <div className="text-light-brown ml-6">
        <h2 className="mx-auto w-max text-2xl font-bold pt-10 ">
          June {chosenDay ? chosenDay : 2}
        </h2>
        <div className="mx-auto w-max mb-2 mt-1.5">Day Schedule</div>

        <div className="text-[14px] flex justify-center">
          <div>
            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 rounded-tl-md border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">6:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">7:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">8:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">9:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">10:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">11:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">12:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">13:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 rounded-bl-md w-15 py-1 bg-light-pink flex justify-center border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">14:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>
          </div>











          <div>
            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">15:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight rounded-tr-md duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">16:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">17:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">18:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">19:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">20:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">21:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">22:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">23:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="rounded-br-md w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>
          </div>







          
        </div>
      </div>
    </>
  );
};

export default Day;
