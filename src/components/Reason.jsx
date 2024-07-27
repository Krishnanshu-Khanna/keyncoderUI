function Reason({ theme }) {
  return (
    <>
      <div className="relative bg-[#1d1534] dark:bg-[#131313]">
        <svg
          width="100%"
          height="100%"
          id="svg"
          color="#131313"
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
            fill='url("#gradient")'
            fillOpacity="1"
          ></path>
        </svg>
      </div>
      <section className="bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] ">
        <div className="text-center mb-[40px]">
          <h2 className="text-[50px] font-semibold mb-2">
            Why Choose KeyNcoder
          </h2>
          <p className="dark:text-black dark:font-semibold text-white">
            Lorem Ipsum courses we have? lorem ipsum
          </p>
        </div>
        <div className="flex justify-center items-center mb-0">
          {/* <div className="relative">
          <img
            src="https://placehold.co/150"
            alt="Placeholder"
            className="rounded-full w-[300px] h-[270px]  object-cover mx-auto"
          />
          <p className="text-[30px] absolute text-center w-full  left-1/2 transform -translate-x-1/2 -top-[150px]">
            lorem ipsum <br /> lorem ipsum
          </p>
          <p className="text-[30px] absolute top-0 right-[-250px] transform rotate-30px">
            lorem ipsum <br /> lorem ipsum
          </p>
          <p className="text-[30px] absolute bottom-0 right-[-250px] transform rotate-60">
            lorem ipsum <br /> lorem ipsum
          </p>
          <p className="text-[30px] absolute text-center w-full left-1/2 transform -translate-x-1/2 -bottom-[150px]">
            lorem ipsum <br /> lorem ipsum
          </p>
          <p className="text-[30px] absolute bottom-0 left-[-250px] transform rotate-[-60]">
            lorem ipsum <br /> lorem ipsum
          </p>
          <p className="text-[30px] absolute top-0 left-[-250px] transform rotate-[-30px]">
            lorem ipsum <br /> lorem ipsum
          </p>
        </div> */}
          <img src="../images/reasons.png" alt="" />
        </div>
        <div className="relative bottom-0">
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
              fill={theme === "dark" ? "#131313" : "#1d1534"}
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Reason;
