

const StatisticsNotLoggedIn = () => {
  return (
    <>
    <div className="flex">



        <div className="w-100 -ml-124 my-10  text-light-brown text-[14px]">
          <h2 className="mx-auto w-max text-2xl font-bold mb-3">
            Your Statistics
          </h2>

          <div className="">
            <div>
              <div>Today</div>
              <div className="w-100 h-15 bg-primary-pink"></div>
            </div>
            <div>
              <div>This week</div>
              <div className="w-100 h-30 bg-primary-pink"></div>
            </div>
            <div>
              <div>This month</div>
              <div className="w-100 h-30 bg-primary-pink"></div>
            </div>



          </div>


        </div>












        <div className="ml-20 mt-10  w-100 mr-5 text-light-brown text-[14px]">
          <h2 className="mx-auto w-max text-2xl font-bold mb-3">
            Study Time
          </h2>
          <div className="ml-17.5"></div>
        </div>






      </div>
    </>
  )
}

export default StatisticsNotLoggedIn