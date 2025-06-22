import { useState } from "react";
import { HiArrowTurnDownLeft } from "react-icons/hi2";

const Calendar = () => {
  const [chosenDay, setChosenDay] = useState<number>();

  const handleDayClick = (day: number) => {
    setChosenDay(day);
  };

  console.log(chosenDay);

  return (
    <>
      <h2 className="text-primary-white text-3xl font-cursive -mt-8.5 ml-36.5">
        Calendar
      </h2>
      <div className="w-125 px-1 mt-10 pl-16 font-bubbly -ml-80">
        <div className="bg-light-pink rounded-md border-4 border-primary-pink">
          <h2 className="mx-auto w-max text-2xl font-bold my-1">June 2025</h2>
          <div className="grid grid-cols-7 bg-dark-green text-[16px]">
            <div className="mx-auto">
              <div>mon</div>
            </div>
            <div className="mx-auto">
              <div>tue</div>
            </div>
            <div className="mx-auto">
              <div>wed</div>
            </div>
            <div className="mx-auto">
              <div>thu</div>
            </div>
            <div className="mx-auto">
              <div>fri</div>
            </div>
            <div className="mx-auto">
              <div>sat</div>
            </div>
            <div className="mx-auto">
              <div>sun</div>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 bg-primary-pink text-xl pt-1">
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">26</div>
            </div>
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">27</div>
            </div>
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">28</div>
            </div>
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">29</div>
            </div>
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">30</div>
            </div>
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">31</div>
            </div>

            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(1)}
            >
              <div>1</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center py-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0 "
              onClick={() => handleDayClick(2)}
            >
              <div className="bg-light-green px-2.5 rounded-full">2</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(3)}
            >
              <div>3</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(4)}
            >
              <div>4</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(5)}
            >
              <div>5</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(6)}
            >
              <div>6</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(7)}
            >
              <div>7</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(8)}
            >
              <div>8</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(9)}
            >
              <div>9</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(10)}
            >
              <div>10</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(11)}
            >
              <div>11</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(12)}
            >
              <div>12</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(13)}
            >
              <div>13</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(14)}
            >
              <div>14</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(15)}
            >
              <div>15</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(16)}
            >
              <div>16</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(17)}
            >
              <div>17</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(18)}
            >
              <div>18</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(19)}
            >
              <div>19</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(20)}
            >
              <div>20</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(21)}
            >
              <div>21</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(22)}
            >
              <div>22</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(23)}
            >
              <div>23</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(24)}
            >
              <div>24</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(25)}
            >
              <div>25</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(26)}
            >
              <div>26</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(27)}
            >
              <div>27</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(28)}
            >
              <div>28</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(29)}
            >
              <div>29</div>
            </div>
            <div
              className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl active:bg-light-green active:duration-0"
              onClick={() => handleDayClick(30)}
            >
              <div>30</div>
            </div>
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">1</div>
            </div>
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">2</div>
            </div>
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">3</div>
            </div>
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">4</div>
            </div>
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">5</div>
            </div>
            <div className="h-13 bg-light-pink flex justify-center pt-3 duration-100 ease-linear cursor-pointer hover:text-2xl">
              <div className="text-primary-pink">6</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-125 rounded-md px-4 py-4 font-bubbly">
        <h2 className="mx-auto w-max text-2xl font-bold my-1">
          June {chosenDay ? chosenDay : 2}
        </h2>
        <div>Schedule</div>

        <div className="text-[14px] flex justify-between">
          <div>
            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0 rounded-tl-md">
                <div className="">6:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 rounded-tr-md border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">7:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">8:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">9:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">10:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">11:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">12:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">1:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center rounded-bl-md">
                <div className="">2:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink rounded-br-md"
              />
            </div>
          </div>

          <div>
            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0 rounded-tl-md">
                <div className="">3:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 rounded-tr-md border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">4:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">5:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">6:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">7:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">8:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">9:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center border-b-0">
                <div className="">10:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-b-0 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink"
              />
            </div>

            <div className="flex">
              <div className="border-4 border-r-0 border-primary-pink w-15 py-1 bg-light-pink flex justify-center rounded-bl-md">
                <div className="">11:00</div>
              </div>
              <input
                type="text"
                placeholder=""
                className="border-4 border-primary-pink w-40 py-1 pl-2 outline-0 bg-light-pink rounded-br-md"
              />
            </div>
          </div>
        </div>
      </div>
      \
    </>
  );
};

export default Calendar;
