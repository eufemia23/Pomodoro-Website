const StatisticsLoggedIn = () => {
  let inputValueNameStored;

  if (localStorage.getItem("storedUserName")) {
    inputValueNameStored = JSON.parse(localStorage.storedUserName);
  } else {
    inputValueNameStored = "Aurelia";
  }

  return (
    <>
      <div className="flex">



        <div className="w-100 -ml-124 my-10  text-light-brown text-[14px]">
          <h2 className="mx-auto w-max text-2xl font-bold mb-3">
            {inputValueNameStored}'s Statistics
          </h2>

          <div className="">
            <div>
              <div className="mx-auto w-max pb-2">Today</div>
              <div className="w-100 border-3 rounded-md border-primary-pink pt-2 pb-1 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white flex justify-around text-wood-warm">
                <div className="text-center">
                  <div>Total Time Focused</div>
                  <div className="text-accent-dark-green text-[21px]">0:25:00</div>
                </div>
                <div className="text-center">
                  <div>Finished Sessions</div>
                  <div className="text-accent-dark-green text-[21px]">1</div>
                </div>
                
              </div>
            </div>

            <div>
              <div className="mx-auto w-max pt-5 pb-2">This week</div>
              <div className="w-100 h-50 border-3 rounded-md border-primary-pink py-1 pt-2 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white">
                <div className="flex justify-around text-wood-warm pb-1 border-b-3 border-b-primary-pink">
                  <div className="text-center">
                    <div>Total Time Focused</div>
                    <div className="text-accent-dark-green text-[21px]">4:00:00</div>
                  </div>
                  <div className="text-center">
                    <div>Finished Sessions</div>
                    <div className="text-accent-dark-green text-[21px]">24</div>
                  </div>
                  
                  
                </div>
                <div className="inset-shadow-sm inset-shadow-white/60 pt-6 text-wood-warm h-31.5">
                  <div className="h-20 flex justify-around ">
                    <div className="bg-accent-green text-center w-[40px] border-3 rounded-md border-accent-dark-green inset-shadow-sm inset-shadow-white mt-8">
                      <div className="-mt-6">6h</div>
                    </div>
                    <div className=" bg-accent-green text-center w-[40px] border-3 rounded-md border-accent-dark-green inset-shadow-sm inset-shadow-white mt-16">
                      <div className="-mt-6">2h</div>
                    </div>
                    <div className=" bg-accent-green text-center w-[40px] border-3 rounded-md border-accent-dark-green inset-shadow-sm inset-shadow-white mt-12">
                      <div className="-mt-6">4h</div>
                    </div>
                    <div className=" bg-accent-green text-center w-[40px] border-3 rounded-md border-accent-dark-green inset-shadow-sm inset-shadow-white mt-8">
                      <div className="-mt-6">6h</div>
                    </div>
                    <div className=" bg-accent-green text-center w-[40px] border-3 rounded-md border-accent-dark-green inset-shadow-sm inset-shadow-white mt-4">
                      <div className="-mt-6">8h</div>
                    </div>
                    <div className=" bg-accent-green text-center w-[40px] border-3 rounded-md border-accent-dark-green inset-shadow-sm inset-shadow-white mt-0">
                      <div className="-mt-6">10h</div>
                    </div>
                    <div className=" bg-accent-green text-center w-[40px] border-3 rounded-md border-accent-dark-green inset-shadow-sm inset-shadow-white mt-10"><div className="-mt-6">5h</div></div>
                  </div>
                  <div className="grid grid-cols-7 grid-rows-5 gap-x-2 px-1 pt-[2px]">
                    <div className="text-center">Mon</div>
                    <div className="text-center">Tue</div>
                    <div className="text-center">Wed</div>
                    <div className="text-center">Thu</div>
                    <div className="text-center">Fri</div>
                    <div className="text-center">Sat</div>
                    <div className="text-center">Sun</div>
                  </div>
                </div>




              </div>
            </div>

            



          </div>


        </div>












        <div className="ml-20 mt-10  w-100 mr-5 text-light-brown text-[14px]">
          <h2 className="mx-auto w-max text-2xl font-bold mb-3">
            Study Time
          </h2>


          <div className="">
            <div>
              <div className="mx-auto w-max pb-2">Today</div>
              <div className="w-100 border-3 rounded-md border-primary-pink pt-2 pb-1 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white flex justify-around text-wood-warm">
                
                
              </div>
            </div>
          </div>


        </div>






      </div>
    </>
  );
};

export default StatisticsLoggedIn;
