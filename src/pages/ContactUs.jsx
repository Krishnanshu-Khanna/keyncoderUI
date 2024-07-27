import React from "react";
import Footer from "../utilities/Footer";
import Navbar from "../utilities/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function ContactUs({ theme, handleThemeSwitch }) {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />

      <div
        className={`flex-grow ${
          theme === "dark"
            ? "bg-[#131313]"
            : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
        } flex items-center justify-center p-6`}
      >
        <div className="bg-gradient-to-r from-red-200 to-orange-200 shadow-lg rounded-3xl p-8 w-full max-w-5xl">
          <h2 className="text-center text-2xl font-bold mb-6">CONTACT US</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4">
                Leave us a message
              </h3>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="First Name Last Name"
                    className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-3 rounded-lg hover:bg-zinc-800"
                >
                  Send
                </button>
              </form>
            </div>
            <div>
              <p className="text-zinc-700 mb-4">
                Address Lorem IpsumLorem Ipsum is simply dummy text of the
                printing and typesetting text ever since the 1500s, when a
              </p>
              <p className="text-zinc-700 mb-4">+91 0000000000</p>
              <p className="text-zinc-700 mb-4">hello@info.com.ng</p>
              <p className="flex gap-4">
                <FontAwesomeIcon icon={faInstagram} className="h-5 md:h-6" />
                <FontAwesomeIcon icon={faFacebook} className="h-5 md:h-6" />
                <FontAwesomeIcon icon={faTwitter} className="h-5 md:h-6" />
              </p>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-red-600">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-red-600">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-red-600">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.991179032359!2d79.15178229903898!3d12.971992597492468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1718043412830!5m2!1sen!2sin"
                  className="w-full border-none"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          theme === "dark"
            ? "bg-[#131313]"
            : "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900]"
        }`}
      >
        <Footer theme={theme} />
      </div>
    </section>
  );
}

export default ContactUs;
