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
    arrows: false,
  };

  return (
    <div className="relative -mt-1 sm:bg-slate-800 sm:-mt-1 md:-mt-2 lg:-mt-5 ">
      <div className="slider-container absolute top-0 left-0 w-full h-full">
        <Slider {...settings}>
          <div>
            <img
              src="../../public/images/slider-CE.png"
              alt=""
              className="w-full h-auto object-cover border-[5px] "
            />
          </div>
          <div>
            <img
              src="../../public/images/slider-VE.png"
              alt=""
              className="w-full h-auto object-cover border-[5px] "
            />
          </div>
          <div>
            {/* h-[61px] sm:h-[109px] md:h-[110px] lg:h-[277px] */}
            <img
              src="../../public/images/slider_Profile.png"
              alt=""
              className="w-full h-auto object-cover border-[5px] "
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LaptopSlider;
