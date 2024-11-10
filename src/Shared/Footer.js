import React from "react";
import Image1 from "../Assets/img/footer/ax.png";
import Image2 from "../Assets/img/footer/gurrantee.png";
import Image3 from "../Assets/img/footer/0e446577.jpg";
import Image4 from "../Assets/img/footer/IMG_9906.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const footerLinks = [
  "Career",
  "Internships",
  "Ezi Products",
  "Terms & Conditions",
  "Bank",
];
const footerSocialLink = [
  {
    linkPath: "https://www.facebook.com/",
    linkIcon: FaFacebookF,
    linkColor: "#1877F2",
  },
  {
    linkPath: "https://pk.linkedin.com/",
    linkIcon: FaLinkedinIn,
    linkColor: "#0077B5",
  },
  {
    linkPath: "https://www.twitter.com/",
    linkIcon: FaXTwitter,
    linkColor: "#1DA1F2",
  },
  {
    linkPath: "https://www.youtube.com/",
    linkIcon: FaYoutube,
    linkColor: "#FF0000",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#212331] py-32 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div>
            <div className="flex gap-2 items-center mb-20">
              <h3 className="text-[#fff] text-4xl uppercase font-bold ">
                About
              </h3>
              <span class="w-0 h-0 border-r-8 border-b-8 border-t-4 border-solid border-transparent border-b-[#f44336]"></span>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-[1.6rem] text-[#99a9b5]">
                Tech House Having 100+ Quality Products and Innovations at
                national and international markets. Rated as Best Software House
                in Region
              </p>
              <div>
                <img src={Image1} alt="Image1" />
              </div>
              <div>
                <img src={Image2} alt="Image2" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center mb-20">
              <h3 className="text-[#fff] text-4xl uppercase font-bold ">
                Recent Posts
              </h3>
              <span class="w-0 h-0 border-r-8 border-b-8 border-t-4 border-solid border-transparent border-b-[#f44336]"></span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-4 gap-4 items-center border-b py-4 border-b-[#99a9b5]">
                <div className="rounded-full overflow-hidden col-span-1 justify-self-center">
                  <img
                    src={Image3}
                    alt="Image3"
                    className="w-[8rem] object-cover"
                  />
                </div>
                <div className="flex flex-col items-start text-[1.6rem] col-span-3">
                  <a
                    href="#1"
                    className="text-[#99a9b5] no-underline hover:text-[#00bcd4] duration-300 ease-in-out"
                  >
                    16th Anniversary
                  </a>
                  <p className="text-[1.4rem] text-[#00bcd4]">
                    February 4, 2024
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 items-center border-b py-4 border-b-[#99a9b5]">
                <div className="rounded-full overflow-hidden col-span-1 justify-self-center">
                  <img
                    src={Image3}
                    alt="Image3"
                    className="w-[8rem] object-cover"
                  />
                </div>
                <div className="flex flex-col items-start text-[1.6rem] col-span-3">
                  <a
                    href="#1"
                    className="text-[#99a9b5] no-underline hover:text-[#00bcd4] duration-300 ease-in-out"
                  >
                    Presidential Awards Won by Eziline Software House in IT
                    Sector
                  </a>
                  <p className="text-[1.4rem] text-[#00bcd4]">
                    February 20, 2023
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 py-4 items-center">
                <div className="rounded-full overflow-hidden justify-self-center col-span-1">
                  <img
                    src={Image4}
                    alt="Image4"
                    className="w-[8rem] object-cover"
                  />
                </div>
                <div className="flex flex-col items-start text-[1.6rem] col-span-3">
                  <a
                    href="#1"
                    className="text-[#99a9b5] no-underline hover:text-[#00bcd4] duration-300 ease-in-out"
                  >
                    Eziline Exhibited at LEAP 2023 Saudi Arabia
                  </a>
                  <p className="text-[1.4rem] text-[#00bcd4]">
                    February 7, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center mb-20">
              <h3 className="text-[#fff] text-4xl uppercase font-bold ">
                Contact
              </h3>
              <span class="w-0 h-0 border-r-8 border-b-8 border-t-4 border-solid border-transparent border-b-[#f44336]"></span>
            </div>
            <div className="text-[#99a9b5] text-[1.6rem]">
              <p>
                <span className="text-[#fff] font-semibold">PK Office</span>:
                304-G, Amna Plaza Pesh Rd Rawalpindi
              </p>
              <p>
                <span className="text-[#fff] font-semibold">US Office</span>:
                16192 Coastal Highway Lewes, DE
              </p>
              <p>
                <span className="text-[#fff] font-semibold">UK Office</span>:
                Intl. House, 776-778 Barking Rd London
              </p>
              <p className="mb-8">
                <span className="text-[#fff] font-semibold">FR Office</span>: 5
                avenue Pierre Salvi 95500 Gonesse Paris
              </p>
              <p>Ph : +92 51 5491184 / +92 51 8772888</p>
              <p>Email : info[@]eziline.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#181828] border-t border-t-[#313646] py-16 px-4">
        <div className="container mx-auto flex justify-between items-center flex-col-reverse lg:flex-row gap-10 lg:gap-2">
          <div>
            <p className="text-[#99a9b5] text-[1.4rem]">
              2022 &copy; Copyrights Eziline Software House
            </p>
          </div>
          <div>
            <ul className="list-none flex items-center flex-wrap justify-center gap-y-6">
              {footerLinks.map((item, i) => {
                return (
                  <li
                    key={i}
                    className={`border-r border-r-[#99a9b5] px-4 ${
                      i === footerLinks.length - 1 ? "last:border-r-0" : ""
                    }`}
                  >
                    <a
                      href="#1"
                      className="px-3 py-2 no-underline text-[#99a9b5] text-[1.4rem] hover:text-[#00bcd4] duration-300 ease-in-out transition-all"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="list-none flex items-center gap-4">
              {footerSocialLink.map((item, i) => {
                return (
                  <li key={i}>
                    <a
                      href={item.linkPath}
                      className="no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: item.linkColor }}
                    >
                      <item.linkIcon className="w-10 h-10 p-1" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
