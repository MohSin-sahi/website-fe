import React from "react";
import Image1 from "../../Assets/img/Work/Capture.PNG";
import Image2 from "../../Assets/img/Work/Capture1.PNG";
import Image3 from "../../Assets/img/Work/Capture2.PNG";

const workPrice = [
  {
    img: Image1,
    bgColor: "#917bea",
    title: "Flexible Price",
    description:
      "Our pricing plan is created by our clients. Market Competitive.",
  },
  {
    img: Image2,
    bgColor: "#00bcd4",
    title: "Quality Work",
    description: "Quality assurance & testing befoe every project delivery.",
  },
  {
    img: Image3,
    bgColor: "#4ecfb9",
    title: "Quick Delivery",
    description: "40 days initial delivery on custom mega projects",
  },
];
const Work = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:container mx-auto">
        {workPrice.map((item, i) => {
          return (
            <div
              className="flex flex-col gap-12 items-center justify-center text-center p-16"
              style={{ backgroundColor: item.bgColor }}
              key={i}
            >
              <div>
                <img src={item.img} alt="Image1" />
              </div>
              <div className="flex flex-col gap-8 text-[#fff]">
                <h2 className="text-[#fff] text-5xl font-bold">{item.title}</h2>
                <p className="text-4xl font-normal leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
