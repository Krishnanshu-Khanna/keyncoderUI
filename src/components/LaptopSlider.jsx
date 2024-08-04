import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const LaptopSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="relative mt-16">
      <img
        src="../images/laptop.png"
        alt="Laptop Slider"
        className="w-full rounded-lg"
      />
      <div className="slider-container absolute  md:top-7  xl:top-7 lg:top-6 md:w-[28.5rem] lg:w-[22rem]  xl:w-[28.5rem] md:left-[4.9rem] xl:left-[4.9rem] lg:left-[3.9rem]">
        <Slider {...settings}>
          <div className="">
            <img
              src="../../public/images/slider-CE.png"
              alt=""
              className="sm:w-[28.5rem] md:w-[28.5rem] lg:w-[22rem] xl:w-[28.5rem] md:h-[17.8125rem] xl:h-[17.8125rem] lg:h-[14rem] "
            />
          </div>
          <div className="">
            <img
              src="../../public/images/slider-VE.png"
              alt=""
              className="md:w-[28.5rem] lg:w-[22rem] xl:w-[28.5rem] md:h-[17.8125rem] xl:h-[17.8125rem] lg:h-[14rem] "
            />
          </div>
          <div className="">
            <img
              src="../../public/images/slider-pf.png"
              alt=""
              className="md:w-[28.5rem] lg:w-[22rem] xl:w-[28.5rem] md:h-[17.8125rem] xl:h-[17.8125rem] lg:h-[14rem] "
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LaptopSlider;
