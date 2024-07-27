import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";

function AboutUs({ handleThemeSwitch, theme }) {
  const getGradientBackground = (index) => {
    if (theme === "dark" && index != 1) {
      return "bg-[#131313]";
    }
    return "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]";
  };

  return (
    <>
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <section
        className={`bg-[#D9D9D9] dark:bg-[#1a1a1a] min-h-screen p-10 md:p-20`}
      >
        <h1 className="text-gray-700 dark:text-gray-300 text-[40px] md:text-[85px] text-center font-bold mt-20 md:mt-40 mb-4">
          Revolutionizing Education
        </h1>
        <p className="text-black dark:text-gray-300 text-md md:text-lg text-justify m-auto w-[90%] md:w-[60%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section>
      <section className={`${getGradientBackground()} h-fit`}>
        <div className="flex flex-col md:flex-row p-10 md:p-20 justify-around">
          <div className="h-[200px] md:h-[500px] w-full md:w-[600px] rounded-3xl bg-gray-200 dark:bg-gray-700 mb-10 md:mb-0"></div>
          <div className="w-full md:w-[600px] flex flex-col items-start p-5 md:p-20">
            <div className="flex justify-center gap-5 items-center mb-4">
              <div className="h-[60px] w-[6px] bg-[#FF0000]"></div>
              <h1 className="text-[#FF0000] text-[30px] md:text-[40px]">
                🔄 A LITTLE HISTORY
              </h1>
            </div>
            <p className="text-white dark:text-gray-400 w-full md:w-[90%] text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </section>
      <section className={`${getGradientBackground()} h-fit`}>
        <div className="flex flex-col md:flex-row p-10 md:p-20 justify-around">
          <div className="w-full md:w-[600px] flex flex-col items-start p-5 md:p-20">
            <div className="flex justify-center gap-5 items-center mb-4">
              <div className="h-[60px] w-[6px] bg-[#2BB79D]"></div>
              <h1 className="text-[#2BB79D] text-[30px] md:text-[40px]">
                🚀 THE PROBLEM
              </h1>
            </div>
            <p className="text-white dark:text-gray-400 w-full md:w-[90%] text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <div className="w-full md:w-[600px] flex flex-col items-start p-5 md:p-20">
            <div className="flex justify-center gap-5 items-center mb-4">
              <div className="h-[60px] w-[6px] bg-[#0132E0]"></div>
              <h1 className="text-[#0132E0] text-[30px] md:text-[40px]">
                💡 THE SOLUTION
              </h1>
            </div>
            <p className="text-white dark:text-gray-400 w-full md:w-[90%] text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </section>
      <section className={`${getGradientBackground()} h-fit p-10 md:p-20`}>
        <h1 className="text-white dark:text-gray-300 font-bold text-[30px] md:text-[40px] text-center mb-10">
          Meet Our Founders
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-around">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-gray-300 dark:text-[#FF6652] font-semibold text-[20px] md:text-[30px] mb-4">
              Lorem Ipsum
            </h2>
            <p className="text-gray-200 dark:text-gray-400 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel
            </p>
          </div>
          <img src="/images/human.png" alt="Founders" className="rounded-lg" />
        </div>
      </section>
      <section className={`dark:bg-[#131313] ${getGradientBackground()}`}>
        <div className="relative">
          <svg
            width="100%"
            height="100%"
            color="#ED374D"
            id="svg"
            viewBox="0 0 1440 300" // Changed the viewBox to better fit the wave
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#ED374D"></stop>
                <stop offset="51%" stopColor="#FA793F"></stop>
                <stop offset="100%" stopColor="#FCB900"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              stroke="none"
              strokeWidth="0"
              fill={"url(#gradient)"}
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </section>
      <section
        className={`${getGradientBackground(1)} dark:text-black text-white`}
      >
        <div className="dark:text-white text-center text-3xl font-bold mb-6">
          Who are we?
        </div>
        <p className="text-center max-w-md mx-auto mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full h-fit md:w-[400px] rounded-3xl bg-gray-200 dark:bg-gray-700 mb-10 md:mb-0 p-6">
            <div className="text-center text-3xl">🚀</div>
            <p className="text-center">
              <i className="text-black dark:text-gray-300 font-bold">
                Lorem ispum is simply
              </i>
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              repellat maiores debitis earum vitae quia a. Eos rerum consequatur
              dolor nam veritatis, ducimus dolores in distinctio neque repellat
              corrupti id!
            </p>
          </div>
          <div className="w-full h-fit md:w-[400px] mt-40 rounded-3xl bg-gray-200 dark:bg-gray-700 mb-10 md:mb-0 p-6">
            <div className="text-center text-3xl">🚀</div>
            <p className="text-center">
              <i className="text-black dark:text-gray-300 font-bold">
                Lorem ispum is simply
              </i>
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              repellat maiores debitis earum vitae quia a. Eos rerum consequatur
              dolor nam veritatis, ducimus dolores in distinctio neque repellat
              corrupti id!
            </p>
          </div>
          <div className="w-full h-fit md:w-[400px] rounded-3xl bg-gray-200 dark:bg-gray-700 mb-10 md:mb-0 p-6">
            <div className="text-center text-3xl">🚀</div>
            <p className="text-center">
              <i className="text-black dark:text-gray-300 font-bold">
                Lorem ispum is simply
              </i>
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              repellat maiores debitis earum vitae quia a. Eos rerum consequatur
              dolor nam veritatis, ducimus dolores in distinctio neque repellat
              corrupti id!
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 310" // Changed the viewBox to better fit the wave
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#ED374D"></stop>
                <stop offset="51%" stopColor="#FA793F"></stop>
                <stop offset="100%" stopColor="#FCB900"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              stroke="none"
              strokeWidth="0"
              fill={theme === "dark" ? "#131313" : "url(#gradient)"}
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </section>
      <section
        className={`${getGradientBackground()} dark:bg-[#131313] text-white py-10 px-5`}
      >
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">
            We're in the News
          </h1>
          <p className="mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="flex flex-row flex-wrap justify-evenly gap-20">
            <img
              src="/images/news.png"
              className="h-[25%] w-[25%]"
              alt="News Image"
            />
            <img
              src="/images/news.png"
              className="h-[25%] w-[25%]"
              alt="News Image"
            />
            <img
              src="/images/news.png"
              className="h-[25%] w-[25%]"
              alt="News Image"
            />
            <img
              src="/images/news.png"
              className="h-[25%] w-[25%]"
              alt="News Image"
            />
            <img
              src="/images/news.png"
              className="h-[25%] w-[25%]"
              alt="News Image"
            />
            <img
              src="/images/news.png"
              className="h-[25%] w-[25%]"
              alt="News Image"
            />
          </div>
        </div>
        <Footer theme={theme} />
      </section>
    </>
  );
}

export default AboutUs;
