import React from "react";
import { FaStar } from "react-icons/fa";
import Image1 from "../../Assets/img/Projects/slider_frame.png";

const Projects = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
        <div>
          <div className="flex justify-center items-center">
            <img
              src={Image1}
              alt="Image1"
              className="lg:w-full w-[80%] md:w-[70%]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <h2 className="text-5xl font-bold uppercase tracking-wider">
            Our Project ManagemenT
          </h2>
          <ul className="list-none flex flex-col gap-6">
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#99a9b5] font-semibold col-span-11">
                Project and Milestone tracking
              </p>
            </li>
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#99a9b5] font-semibold col-span-11">
                Task management with SMS/email notification
              </p>
            </li>
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#99a9b5] font-semibold col-span-11">
                24/7 online service & Support.
              </p>
            </li>
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#99a9b5] font-semibold col-span-11">
                Billing/invoicing transparent management.
              </p>
            </li>
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#99a9b5] font-semibold col-span-11">
                Discussion board for project management.
              </p>
            </li>
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#99a9b5] font-semibold col-span-11">
                HR/ Payroll & Complete office management.
              </p>
            </li>
            <li className="grid grid-cols-12 items-center gap-4 text-2xl">
              <FaStar className="text-[#f44336] w-6 h-6 justify-self-end" />
              <p className="text-[#99a9b5] font-semibold col-span-11">
                Cloud-based & Robust technology.
              </p>
            </li>
          </ul>
          <div className="flex items-center gap-4 flex-wrap">
            <button className="border-2 border-[#fb4630] text-[#fb4630] hover:bg-[#fb4630] hover:text-[#fff] py-2 px-5 rounded-md text-2xl duration-300 ease-in-out transition-all uppercase font-semibold outline-none">
              Staff
            </button>
            <button className="border-2 border-[#1e73be] text-[#1e73be] hover:bg-[#1e73be] hover:text-[#fff] py-2 px-5 rounded-md text-2xl duration-300 ease-in-out transition-all uppercase font-semibold outline-none">
              Intern
            </button>
            <button className="border-2 border-[#e5003d] text-[#e5003d] hover:bg-[#e5003d] hover:text-[#fff] py-2 px-5 rounded-md text-2xl duration-300 ease-in-out transition-all uppercase font-semibold outline-none">
              Agent
            </button>
            <button className="border-2 border-[#59d600] text-[#59d600] hover:bg-[#59d600] hover:text-[#fff] py-2 px-5 rounded-md text-2xl duration-300 ease-in-out transition-all uppercase font-semibold outline-none">
              Client
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
