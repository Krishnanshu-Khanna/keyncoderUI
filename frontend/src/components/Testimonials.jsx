import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestias numquam voluptates voluptas temporibus recusandae sed ullam laborum dolores quos ut. Exercitationem quae eius eligendi expedita magni, neque eum perferendis eos voluptates repellat. Quia!",
    name: "Aaron Dessner",
    image: "./images/Aaron.png",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestias numquam voluptates voluptas temporibus recusandae sed ullam laborum dolores quos ut. Exercitationem quae eius eligendi expedita magni, neque eum perferendis eos voluptates repellat. Quia!",
    name: "Kesh Werawil",
    image: "./images/Kesh.png",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestias numquam voluptates voluptas temporibus recusandae sed ullam laborum dolores quos ut. Exercitationem quae eius eligendi expedita magni, neque eum perferendis eos voluptates repellat. Quia!",
    name: "Alan Yarsar",
    image: "./images/Kesh.png",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestias numquam voluptates voluptas temporibus recusandae sed ullam laborum dolores quos ut. Exercitationem quae eius eligendi expedita magni, neque eum perferendis eos voluptates repellat. Quia!",
    name: "Peter Quill",
    image: "./images/Kesh.png",
  },
];

const Testimonials = ({ theme, type, course }) => {
  const location = useLocation();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Determine styling based on location pathname
  const isLandingPage = location.pathname === "/";
  const isCoursePage = location.pathname === "/dsa";

  return (
    // ${theme === "dark" ? "bg-[#131313]" : "bg-[#181622]"}
    <div
      className={`flex flex-col text-center 
        ${course ? "bg-transparent" : ""} ${
        isLandingPage && "bg-[#181622] text-white dark:bg-[#131313]  "
      } ${isCoursePage && "bg-[#1d1534] text-black "}`}
    >
      <h1
        className={`mt-10 font-bold text-3xl md:text-5xl text-center
         ${isCoursePage && " text-black dark:text-white"}
        
        ${course ? "text-black" : ""}`}
      >
        {type === "student" ? "Hear From Our Students" : "Expert Reviews"}
      </h1>
      <p className="mt-0 text-[#8A8A8A]">
        {type !== "student"
          ? "Hear what Industry people say about our Course"
          : ""}
      </p>
      <Slider {...settings} className="text-white mx-5 mt-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="text-left max-w-lg mx-auto p-6 bg-[#383232] rounded-lg mb-10"
          >
            <p className="text-lg mb-4 text-gray-400">{testimonial.text}</p>
            <div className="flex items-center justify-end">
              <p className="text-white">{testimonial.name}</p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-4"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
