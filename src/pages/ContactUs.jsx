import React from "react";
import Footer from "../utilities/Footer";
import Navbar from "../utilities/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTelegram,
	faTwitter,
	faWhatsapp,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function ContactUs({ theme, handleThemeSwitch }) {
	return (
		<section className='min-h-screen flex flex-col'>
			<Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />

			<div
				className={`flex-grow 
						bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] flex items-center justify-center mt-[4rem] p-16`}>
				<div className='bg-gradient-to-r from-red-200 to-orange-200 dark:bg-gray-800 shadow-lg rounded-3xl p-10 w-full max-w-5xl'>
					<h2 className='text-center text-2xl font-bold mb-6'>CONTACT US</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='md:col-span-2 text-center mb-8'>
							<h3 className='text-lg font-semibold text-red-600'>
								We love our community :{")"}
							</h3>
							<p>
								Have questions or feedback? We'd love to hear from you! Get in touch
								with us today.
							</p>
						</div>
						<div>
							<form>
								<div className='mb-4'>
									<input
										type='text'
										placeholder='First Name Last Name'
										className='w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
									/>
								</div>
								<div className='mb-4'>
									<input
										type='email'
										placeholder='Email Address'
										className='w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
									/>
								</div>
								<div className='mb-4'>
									<textarea
										placeholder='Your Message'
										className='w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'></textarea>
								</div>
								<button
									type='submit'
									className='w-full bg-black text-white p-3 rounded-lg hover:bg-zinc-800'>
									Send
								</button>
							</form>
						</div>
						<div>
							<div className='text-zinc-700 mb-4'>
								<p>+91 0000000000</p>
								<p>hello@info.com.ng</p>
							</div>
							<div className='flex gap-4 mb-4'>
								<a href='#' className=''>
									<FontAwesomeIcon icon={faInstagram} className='h-5 md:h-6' />
								</a>
								<a href='#' className=''>
									<FontAwesomeIcon icon={faFacebook} className='h-5 md:h-6' />
								</a>
								<a href='#' className=''>
									<FontAwesomeIcon icon={faTwitter} className='h-5 md:h-6' />
								</a>
								<a href='#' className=''>
									<FontAwesomeIcon icon={faTelegram} className='h-5 md:h-6' />
								</a>
								<a href='#' className=''>
									<FontAwesomeIcon icon={faLinkedin} className='h-5 md:h-6' />
								</a>
								<a href='#' className=''>
									<FontAwesomeIcon icon={faYoutube} className='h-5 md:h-6' />
								</a>
							</div>
							<button
								type='button'
								className='w-full flex flex-row bg-green-500 text-white font-bold py-2 px-4 rounded-lg justify-center gap-4'>
								<FontAwesomeIcon icon={faWhatsapp} className='h-5 md:h-6' />
								<span className='font-medium'>Message us on WhatsApp</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`
						bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]
				}`}>
				<div className='relative w-full'>
					<svg
						width='100%'
						height='100%'
						id='svg'
						viewBox='0 0 1440 320'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,245.3C560,224,640,192,720,197.3C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
							stroke='none'
							strokeWidth='0'
							fill={theme === "dark" ? "#232222" : "#E6E6E6"}
							fillOpacity='1'></path>
					</svg>
				</div>
				<Footer theme={theme} />
			</div>
		</section>
	);
}

export default ContactUs;
