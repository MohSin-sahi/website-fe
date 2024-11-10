import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Image1 from "../../Assets/img/clients/133-13-1.png";
import Image2 from "../../Assets/img/clients/135-13.png";
import Image3 from "../../Assets/img/clients/137-13-13-1.png";
import Image4 from "../../Assets/img/clients/138-13.png";
import Image5 from "../../Assets/img/clients/1310-13.png";
import Image6 from "../../Assets/img/clients/1314-13-1.png";
import Image7 from "../../Assets/img/clients/Al-Aziz.png";
import Image8 from "../../Assets/img/clients/dsadasdassa.png";
import Image9 from "../../Assets/img/clients/ezitech.png";
import Image10 from "../../Assets/img/clients/saaaaaaa.png";

const imgSlider = [
  { imgName: "Image1", imgPath: Image1 },
  { imgName: "Image2", imgPath: Image2 },
  { imgName: "Image3", imgPath: Image3 },
  { imgName: "Image4", imgPath: Image4 },
  { imgName: "Image5", imgPath: Image5 },
  { imgName: "Image6", imgPath: Image6 },
  { imgName: "Image7", imgPath: Image7 },
  { imgName: "Image8", imgPath: Image8 },
  { imgName: "Image9", imgPath: Image9 },
  { imgName: "Image10", imgPath: Image10 },
];
const Clients = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-4">
      <div className="container mx-auto">
        <h1 className="text-[#ff6600] text-5xl uppercase font-semibold tracking-wide mb-4 pl-4 md:pl-0">
          Our clients
        </h1>
        <div className="grid grid-cols-12 items-center justify-between">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="col-span-1 justify-self-start bg-[#5f727f] p-4 hover:bg-[#00bcd4] duration-300 ease-in-out transition-all hover:text-[#fff]"
          >
            <SlArrowLeft className="w-6 h-6" />
          </button>
          <Slider ref={sliderRef} {...settings} className="col-span-10">
            {imgSlider.map((item, i) => {
              return (
                <div className="px-4" key={1}>
                  <div>
                    <img
                      src={item.imgPath}
                      alt={item.imgName}
                      className="w-52 mx-auto"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="justify-self-end bg-[#5f727f] p-4 hover:bg-[#00bcd4] duration-300 ease-in-out transition-all hover:text-[#fff]"
          >
            <SlArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
