import { useEffect, useState, type SetStateAction } from "react";

const Day = ({ chosenDay }) => {

  const [schedule, setSchedule] = useState(
   JSON.parse(localStorage.schedule) ||  []
  );


    useEffect(() => {
    localStorage.schedule = JSON.stringify(schedule);
  }, [schedule]);

  


  

  const [inputValue6, setInputValue6] = useState(schedule[0]);
  
  const handleChange6 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue6(e.target.value);
  };

  const [inputValue7, setInputValue7] = useState(schedule[1]);
  
  const handleChange7 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue7(e.target.value);
  };
  const [inputValue8, setInputValue8] = useState(schedule[2]);
  
  const handleChange8 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue8(e.target.value);
  };
  const [inputValue9, setInputValue9] = useState(schedule[3]);
  
  const handleChange9 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue9(e.target.value);
  };
  const [inputValue10, setInputValue10] = useState(schedule[4]);
  
  const handleChange10 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue10(e.target.value);
  };
  const [inputValue11, setInputValue11] = useState(schedule[5]);
  
  const handleChange11 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue11(e.target.value);
  };
  const [inputValue12, setInputValue12] = useState(schedule[6]);
  
  const handleChange12 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue12(e.target.value);
  };
  const [inputValue13, setInputValue13] = useState(schedule[7]);
  
  const handleChange13 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue13(e.target.value);
  };
  const [inputValue14, setInputValue14] = useState(schedule[8]);
  
  const handleChange14 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue14(e.target.value);
  };
  const [inputValue15, setInputValue15] = useState(schedule[9]);
  
  const handleChange15 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue15(e.target.value);
  };
  const [inputValue16, setInputValue16] = useState(schedule[10]);
  
  const handleChange16 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue16(e.target.value);
  };
  const [inputValue17, setInputValue17] = useState(schedule[11]);
  
  const handleChange17 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue17(e.target.value);
  };
  const [inputValue18, setInputValue18] = useState(schedule[12]);
  
  const handleChange18 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue18(e.target.value);
  };
  const [inputValue19, setInputValue19] = useState(schedule[13]);
  
  const handleChange19 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue19(e.target.value);
  };

   const [inputValue20, setInputValue20] = useState(schedule[14]);
  
  const handleChange20 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue20(e.target.value);
  };

   const [inputValue21, setInputValue21] = useState(schedule[15]);
  
  const handleChange21 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue21(e.target.value);
  };

   const [inputValue22, setInputValue22] = useState(schedule[16]);
  
  const handleChange22 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue22(e.target.value);
  };
  const [inputValue23, setInputValue23] = useState(schedule[17]);
  
  const handleChange23 = (e: { target: { value: SetStateAction<string> } }) => {
      setInputValue23(e.target.value);
  };


 

  const onSaveClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setSchedule(prevSchedule => {
      const newSchedule = [...prevSchedule];
      newSchedule[0] = inputValue6;
      newSchedule[1] = inputValue7;
      newSchedule[2] = inputValue8;
      newSchedule[3] = inputValue9;
      newSchedule[4] = inputValue10;
      newSchedule[5] = inputValue11;
      newSchedule[6] = inputValue12;
      newSchedule[7] = inputValue13;
      newSchedule[8] = inputValue14;
      newSchedule[9] = inputValue15;
      newSchedule[10] = inputValue16;
      newSchedule[11] = inputValue17;
      newSchedule[12] = inputValue18;
      newSchedule[13] = inputValue19;
      newSchedule[14] = inputValue20;
      newSchedule[15] = inputValue21;
      newSchedule[16] = inputValue22;
      newSchedule[17] = inputValue23;
      return newSchedule;
    });
  }

   


  return (
    <>
      <div className="text-light-brown ml-6">
        <h2 className="mx-auto w-max text-2xl font-bold pt-10 ">
          June {chosenDay ? chosenDay : 2}
        </h2>
        <div className="mx-auto w-max mb-2 mt-1.5">Day Schedule</div>
        <form>
        <div className="text-[14px] flex justify-center">
          <div>
            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 rounded-tl-md border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">6:00</div>
              </div>
              <input
                type="text"
                value={inputValue6}
                onChange={handleChange6}
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">7:00</div>
              </div>
              <input
                type="text"
                value={inputValue7}
                onChange={handleChange7}
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">8:00</div>
              </div>
              <input
                type="text"
                value={inputValue8}
                onChange={handleChange8}
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">9:00</div>
              </div>
              <input
                type="text"
                value={inputValue9}
                onChange={handleChange9}
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">10:00</div>
              </div>
              <input
                type="text"
                value={inputValue10}
                onChange={handleChange10}
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">11:00</div>
              </div>
              <input
                type="text"
                value={inputValue11}
                onChange={handleChange11}
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">12:00</div>
              </div>
              <input
                type="text"
                value={inputValue12}
                onChange={handleChange12}
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">13:00</div>
              </div>
              <input
                type="text"
                value={inputValue13}
                onChange={handleChange13}
                className="border-b-0 border-r-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 rounded-bl-md w-15 py-1 bg-light-pink flex justify-center border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">14:00</div>
              </div>
              <input
                type="text"
                value={inputValue14}
                onChange={handleChange14}
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
                value={inputValue15}
                onChange={handleChange15}
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight rounded-tr-md duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">16:00</div>
              </div>
              <input
                type="text"
                value={inputValue16}
                onChange={handleChange16}
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">17:00</div>
              </div>
              <input
                type="text"
                value={inputValue17}
                onChange={handleChange17}
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">18:00</div>
              </div>
              <input
                type="text"
                value={inputValue18}
                onChange={handleChange18}
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">19:00</div>
              </div>
              <input
                type="text"
                value={inputValue19}
                onChange={handleChange19}
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">20:00</div>
              </div>
              <input
                type="text"
                value={inputValue20}
                onChange={handleChange20}
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">21:00</div>
              </div>
              <input
                type="text"
                value={inputValue21}
                onChange={handleChange21}
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-b-0 border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">22:00</div>
              </div>
              <input
                type="text"
                value={inputValue22}
                onChange={handleChange22}
                className="border-b-0 w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>

            <div className="flex">
              <div className="border-r-0 w-15 py-1 bg-light-pink flex justify-center border-3 border-primary-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight">
                <div className="">23:00</div>
              </div>
              <input
                type="text"
                value={inputValue23}
                onChange={handleChange23}
                className="rounded-br-md w-40 py-1 px-2 outline-0 bg-light-pink border-3 border-primary-pink focus:bg-lighter-pink focus:inset-shadow-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-pink-highlight duration-200 ease-linear"
              />
            </div>
          </div>


          

          
        </div>
        <button
            type="submit"
            className=" bg-primary-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-wood-warm border-3 rounded-[5px] mt-3 py-1 mx-auto px-42.5 hover:cursor-pointer duration-100 ease-linear active:mt-4 active:shadow-none hover:bg-accent-green active:border-accent-dark-green active:bg-accent-green block"
            onClick={onSaveClick}
          >
          Save changes
          </button>
        </form>
      </div>
    </>
  );
};

export default Day;
