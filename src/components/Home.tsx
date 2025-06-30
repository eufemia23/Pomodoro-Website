import { FaGithubAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <h2 className="text-primary-white text-3xl font-cursive -mt-8.5 ml-29">
        Home
      </h2>
      <div className="w-100 -ml-118 my-10 text-light-brown">
        <div className="">
          <h2 className="mx-auto w-max text-2xl font-bold mb-3">
            Welcome to Pomodoro Diary!
          </h2>

          <div className="text-center">
            Hi! This page is still a work in progress : Please visit my GitHub
            or other social media.
          </div>
          <div className="w-40 mx-auto">
            <div className="flex text-wood-warm mt-3">
              <div className="w-20 flex justify-center">
                <a target="_blank" href="https://github.com/eufemia23">
                  <FaGithubAlt className="size-10 hover:size-11 duration-100 ease-linear cursor-pointer" />
                </a>
              </div>

              <div className="w-20 flex justify-center">
                <a target="_blank">
                  <FaSquareXTwitter className="size-10 hover:size-11 duration-100 ease-linear cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-101 mt-10 ml-19">
        <div>
          <h2 className="mx-auto w-max text-2xl font-bold mb-3 text-light-brown">
            FAQ
          </h2>
          <div className="text-light-brown text-center">
            <div className="mb-2 text-accent-dark-green">What is Pomodoro?</div>
            <div className="mb-8">
              Pomodoro is a time management method that uses a timer to break
              down work into intervals, typically 25 minutes long, separated by
              short breaks.
            </div>

            <div className="mb-2 text-accent-dark-green">
              Why use Pomodoro over other methods?
            </div>
            <div className="mb-8">
              The Pomodoro Technique helps you focus more intensively on a task,
              resist interruptions, and prevent burnout.
            </div>

            <div className="mb-2 text-accent-dark-green">
              When is this website going to be available?
            </div>
            <div className="">
              I'm still learning how to make websites, so I need to learn
              backend before I continue!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
