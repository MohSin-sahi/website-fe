import React from "react";
import Image1 from "../../Assets/img/About/bottom1.jpg";
import { FaStar } from "react-icons/fa";
import Image2 from "../../Assets/img/About/slider_frame.png";

const About = () => {
  return (
    <section
      className="h-screen bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${Image1})` }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
        <div className="flex flex-col gap-12">
          <h2 className="text-5xl text-[#fff] font-bold uppercase tracking-wider">
            About <span className="ml-8 text-[#27ffe3]">E</span>
            <span className="text-[#4ecfb9]">Z</span>
            <span className="text-[#00cde7]">I</span>
            <span className="text-[#5393ff]">L</span>
            <span className="text-[#0084bf]">I</span>
            <span className="text-[#0084bf]">N</span>
            <span className="text-[#0084bf]">E</span>
          </h2>
          <ul className="list-none flex flex-col gap-6">
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#fff] font-semibold col-span-11">
                Eziline is an independent Pakistan Based company
              </p>
            </li>
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#fff] font-semibold col-span-11">
                Operating Since 2007 – Eziline has been in profit since the
                beginning
              </p>
            </li>
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#fff] font-semibold col-span-11">
                We are website specialists (web design / dynamic web solution /
                graphics design / Multimedia development)
              </p>
            </li>
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#fff] font-semibold col-span-11">
                A close-knit team of 350+ designers
              </p>
            </li>
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#fff] font-semibold col-span-11">
                Programmers
              </p>
            </li>
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#fff] font-semibold col-span-11">
                System analysts and marketing executives
              </p>
            </li>
          </ul>
        </div>
        <div>
          <div className="relative flex justify-center items-center">
            <img
              src={Image2}
              alt="Image2"
              className="lg:w-full w-[80%] md:w-[70%]"
            />
            {/* <iframe
              title="video-iframe"
              className="absolute top-[46%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width="450"
              height="284"
              src="https://www.youtube.com/embed/PTqcbyRa9mU?autoplay=0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
