const ProfileLoggedIn = () => {
  return (
    <div>
      <div className="w-125 -ml-140 px-20 mt-10">
        <div className="border-3 rounded-md border-primary-pink w-100 p-2 bg-light-pink shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white h-30 text-light-brown flex justify-center items-center">
          <div className="bg-primary-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-wood-warm border-3 rounded-[5px] px-5 py-3  hover:cursor-pointer duration-100 ease-linear mb-1 active:mb-0 active:shadow-none hover:bg-light-pink active:border-primary-pink active:bg-light-pink mx-2">
            Sign up
          </div>

          <div className="bg-primary-white shadow-[0px_2px_3px_rgba(132,88,68,0.5)] inset-shadow-sm inset-shadow-white border-wood-warm border-3 rounded-[5px] px-5 py-3  hover:cursor-pointer duration-100 ease-linear mb-1 active:mb-0 active:shadow-none hover:bg-light-pink active:border-primary-pink active:bg-light-pink mx-2">
            Log in
          </div>
        </div>
      </div>
      <div className="w-125 px-15 py-10">right side</div>
    </div>
  );
};

export default ProfileLoggedIn;
