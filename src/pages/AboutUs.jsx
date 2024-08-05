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
					className={`bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] min-h-screen pt-10 md:pt-20 mb-0 flex flex-col justify-between relative`}>
					<div>
						<h1 className='text-gray-700 dark:text-gray-300 text-[40px] md:text-[85px] text-center font-bold mt-20 md:mt-40 mb-4'>
							Revolutionizing Education
						</h1>
						<p className='text-black dark:text-gray-300 text-md md:text-lg text-justify m-auto w-[90%] md:w-[60%]'>
							No matter who you are or where you come from, we provide the best
							training and placement opportunities for everyone, from all walks of
							life.
						</p>
					</div>
					<div className='absolute bottom-0 left-0 w-full z-10'>
						<svg
							width='100%'
							height='100%'
							id='svg'
							viewBox='0 0 1440 320'
							xmlns='http://www.w3.org/2000/svg'>
							<defs>
								<linearGradient id='gradient' x1='0%' y1='50%' x2='100%' y2='50%'>
									<stop offset='0%' stopColor='#ED374D'></stop>
									<stop offset='51%' stopColor='#FA793F'></stop>
									<stop offset='100%' stopColor='#FCB900'></stop>
								</linearGradient>
							</defs>
							<path
								d='M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
								stroke='none'
								strokeWidth='0'
								fill={theme === "dark" ? "#131313" : "#D9D9D9"}
								fillOpacity='1'></path>
						</svg>
					</div>
				</section>

				<section className={`bg-[#D9D9D9] dark:bg-[#1a1a1a] h-fit mt-[-2px]`}>
					<div className='flex flex-col md:flex-row p-10 md:p-20 justify-around'>
						<div className='h-[200px] md:h-[500px] w-full md:w-[600px] rounded-3xl bg-gray-200 dark:bg-gray-700 mb-10 md:mb-0'></div>
						<div className='w-full md:w-[600px] flex flex-col items-start p-5 md:p-20'>
							<div className='flex justify-center gap-5 items-center mb-4'>
								<div className='h-[60px] w-[6px] bg-[#FF0000]'></div>
								<h1 className='text-[#FF0000] text-[30px] md:text-[40px]'>
									🔄 A LITTLE HISTORY
								</h1>
							</div>
							<p className='dark:text-gray-400 w-full md:w-[90%] text-left'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text ever
								since the 1500s. Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s.
							</p>
						</div>
					</div>
				</section>
				<section className={`bg-[#D9D9D9] dark:bg-[#1a1a1a] h-fit`}>
					<div className='flex flex-col md:flex-row p-10 md:p-20 justify-around'>
						<div className='w-full md:w-[600px] flex flex-col items-start p-5 md:p-20'>
							<div className='flex justify-center gap-5 items-center mb-4'>
								<div className='h-[60px] w-[6px] bg-[#2BB79D]'></div>
								<h1 className='text-[#2BB79D] text-[30px] md:text-[40px]'>
									🚀 THE PROBLEM
								</h1>
							</div>
							<p className=' dark:text-gray-400 w-full md:w-[90%] text-justify'>
								Even with high enrollment in BCA and similar degrees across many local
								colleges in India, there’s a significant gap in helping students find
								good career opportunities. Many colleges have weak or nonexistent
								placement cells, making it harder for students to become job-ready. On
								the other hand, startups and companies also struggle to find skilled
								professionals within their budgets.
							</p>
						</div>
						<div className='w-full md:w-[600px] flex flex-col items-start p-5 md:p-20'>
							<div className='flex justify-center gap-5 items-center mb-4'>
								<div className='h-[60px] w-[6px] bg-[#0132E0]'></div>
								<h1 className='text-[#0132E0] text-[30px] md:text-[40px]'>
									💡 THE SOLUTION
								</h1>
							</div>
							<p className=' dark:text-gray-400 w-full md:w-[90%] text-justify'>
								Keyncoders aims to be the finest training and placement cell for local
								colleges nationwide. We believe that, regardless of financial or
								location constraints, every deserving candidate deserves excellent
								skills and placement opportunities.
							</p>
						</div>
					</div>
				</section>
				<section className={`bg-[#D9D9D9] dark:bg-[#1a1a1a] h-fit p-10 md:p-20`}>
					<h1 className=' dark:text-gray-300 font-bold text-[30px] md:text-[40px] text-center mb-10'>
						Meet Our Founders
					</h1>
					<div className='flex flex-col md:flex-row items-center md:items-start justify-around'>
						<div className='md:w-1/2 mb-10 md:mb-0'>
							<h2 className='text-[#FF6652] font-semibold text-[20px] md:text-[30px] mb-4'>
								Lorem Ipsum
							</h2>
							<p className='dark:text-gray-400 text-justify'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure nisi esse
								ipsa quis id iusto, cupiditate illo soluta explicabo optio? Ipsam
								accusamus, maxime reprehenderit nesciunt molestias culpa debitis odio
								expedita!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatum delectus dolore id quae exercitationem molestiae natus
								distinctio porro voluptates fugit architecto laudantium veritatis,
								suscipit enim vel nostrum, accusantium pariatur. Ullam.
							</p>
						</div>
						<img src='/images/human.png' alt='Founders' className='rounded-lg' />
					</div>
				</section>
				<section className={` bg-[#D9D9D9] dark:bg-[#1a1a1a]`}>
					<div className='relative'>
						<svg
							width='100%'
							height='100%'
							color='#ED374D'
							id='svg'
							viewBox='0 0 1440 300' // Changed the viewBox to better fit the wave
							xmlns='http://www.w3.org/2000/svg'>
							<defs>
								<linearGradient id='gradient' x1='0%' y1='50%' x2='100%' y2='50%'>
									<stop offset='0%' stopColor='#ED374D'></stop>
									<stop offset='51%' stopColor='#FA793F'></stop>
									<stop offset='100%' stopColor='#FCB900'></stop>
								</linearGradient>
							</defs>
							<path
								d='M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
								stroke='none'
								strokeWidth='0'
								fill={"url(#gradient)"}
								fillOpacity='1'></path>
						</svg>
					</div>
				</section>
				<section className={`${getGradientBackground(1)} text-black`}>
					<div className='dark:text-white text-center md:text-5xl text-3xl font-bold mb-6'>
						Who are we?
					</div>
					<p className='text-center max-w-md mx-auto mb-8'>
						At KeyNcoders, we ensure skilled students are matched with tech companies
					</p>
					<div className='flex flex-wrap justify-center gap-8'>
						<div className='w-full h-fit md:w-[400px] rounded-3xl bg-gray-200 dark:bg-gray-700 mb-10 md:mb-0 p-6'>
							<p className='text-center'>
								<i className='text-black dark:text-gray-300 font-bold'>
									Your Learning partner
								</i>
							</p>
							<p className='text-gray-800 dark:text-gray-400'>
								KeyNcoders provides a tailored curriculum, structured learning path, and
								dedicated mentors to ensure students meet current industry needs and
								excel in interviews.
							</p>
						</div>
						<div className='w-full h-fit md:w-[400px] mt-40 rounded-3xl bg-gray-200 dark:bg-gray-700 mb-10 md:mb-0 p-6'>
							<p className='text-center'>
								<i className='text-black dark:text-gray-300 font-bold'>
									Your Placement Cell
								</i>
							</p>
							<p className='text-gray-800 dark:text-gray-400'>
								KeyNcoders offers placement support for BCA and similar degrees,
								bridging gaps for colleges with weak placement cells and ensuring equal
								access to opportunities.
							</p>
						</div>
						<div className='w-full h-fit md:w-[400px] rounded-3xl bg-gray-200 dark:bg-gray-700 mb-10 md:mb-0 p-6'>
							<p className='text-center'>
								<i className='text-black dark:text-gray-300 font-bold'>
									Your Hiring Partner
								</i>
							</p>
							<p className='text-gray-800 dark:text-gray-400'>
								KeyNcoders partners with tech companies for direct hiring and offers
								budget-friendly solutions, connecting skilled candidates with affordable
								opportunities.
							</p>
						</div>
					</div>
					<div className='relative'>
						<svg
							width='100%'
							height='100%'
							id='svg'
							viewBox='0 0 1440 310' // Changed the viewBox to better fit the wave
							xmlns='http://www.w3.org/2000/svg'>
							<defs>
								<linearGradient id='gradient' x1='0%' y1='50%' x2='100%' y2='50%'>
									<stop offset='0%' stopColor='#ED374D'></stop>
									<stop offset='51%' stopColor='#FA793F'></stop>
									<stop offset='100%' stopColor='#FCB900'></stop>
								</linearGradient>
							</defs>
							<path
								d='M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
								stroke='none'
								strokeWidth='0'
								fill={theme === "dark" ? "#131313" : "#D9D9D9"}
								fillOpacity='1'></path>
						</svg>
					</div>
				</section>
				<section
					className={`bg-[#D9D9D9] dark:bg-[#131313] text-white text-center px-5`}>
					<h1 className='text-5xl font-bold text-black mb-20 dark:text-white'>
						Recognitions
					</h1>
					<div className='max-w-screen-lg mx-auto py-10 flex justify-around items-center'>
						<img
							src={
								theme === "dark" ? "./images/vitWhite.png" : "./images/vitBlack.png"
							}
							alt='VIT Logo'
							className='h-40 object-contain'
						/>
						<img
							src={
								theme === "dark"
									? "./images/microsoftWhite.png"
									: "./images/microsoftBlack.png"
							}
							alt='Microsoft Logo'
							className='h-40 object-contain'
						/>
					</div>
				</section>

				<Footer theme={theme} />
			</>
		);
}

export default AboutUs;
