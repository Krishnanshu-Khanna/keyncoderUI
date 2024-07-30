import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = ({ theme }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestias numquam voluptates voluptas temporibus recusandae sed ullam laborum dolores quos ut. Exercitationem quae eius eligendi expedita magni, neque eum perferendis eos voluptates repellat. Quia!",
      name: "Aaron Dessner",
      image: "../public/images/Aaron.png",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestias numquam voluptates voluptas temporibus recusandae sed ullam laborum dolores quos ut. Exercitationem quae eius eligendi expedita magni, neque eum perferendis eos voluptates repellat. Quia!",
      name: "Kesh Werawil",
      image: "../public/images/Kesh.png",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestias numquam voluptates voluptas temporibus recusandae sed ullam laborum dolores quos ut. Exercitationem quae eius eligendi expedita magni, neque eum perferendis eos voluptates repellat. Quia!",
        name: "Alan Yarsar",
        image: "../public/images/Kesh.png",
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestias numquam voluptates voluptas temporibus recusandae sed ullam laborum dolores quos ut. Exercitationem quae eius eligendi expedita magni, neque eum perferendis eos voluptates repellat. Quia!",
        name: "Peter quill",
        image: "../public/images/Kesh.png",
      },
  ];

  return (
    <div
      className={`flex flex-col gap-16 text-center py-10 ${
        theme === "dark" ? "bg-[#131313]" : "bg-[#1d1534]"
      } text-white`}
    >
      <h1 className="font-semibold text-2xl md:text-[50px] text-center text-[#E5E5E5]">
        Hear From Our Students
      </h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="text-left max-w-lg mx-auto p-6 bg-[#383232] rounded-lg relative"
          >
            <p className="text-lg mb-4 text-gray-400">{testimonial.text}</p>
            <div className=" flex items-center justify-end">
              <p className=" text-white">{testimonial.name}</p>
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
