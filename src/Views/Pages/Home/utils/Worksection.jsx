import React from "react";
import ArchitectSVG from "../../../../assets/architect.svg";
import second from "../../../../assets/second.svg";
import third from "../../../../assets/third.svg";
import fourth from "../../../../assets/fourth.svg";

function Worksection() {
  return (
    <>
      <div className="mx-auto px-5 md:px-20 lg:px-[160px] py-[90px] bg-[#0A23C7]">
        {/* Heading and one-liner intro */}
        <div className="text-center mb-8">
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-4xl xl:text-5xl font-normal text-white mb-2 font-body "
          >
            What do we do
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-normal text-white font-roboto text-xs xl:text-sm tracking-[0.3em]"
          >
            WE FOSTER A UNIQUE ARCHITECTURAL IDENTITY WITH ALL OUR DESIGN
            CONSULTANCY.
          </p>
        </div>

        {/* Cards */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div
            data-aos="flip-up"
            data-aos-duration="1500"
            className="h-full min-h-64 bg-white p-4 hover:bg-black group"
          >
            <img
              src={ArchitectSVG}
              alt="Logo 1"
              className="h-28 md:h-[6rem] py-4 group-hover:text-white"
            />
            <h2 className="text-xl md:text-base xl:text-lg pb-2 font-body font-normal group-hover:text-white">
              Architectural Planning
            </h2>
            <p className="text-base md:text-xs xl:text-sm font-roboto text-[#242424] group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sed duis blandit tincidunt massa sed arcu posuere.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="flip-down"
            data-aos-duration="1500"
            className="h-full min-h-64 bg-white p-4 hover:bg-black group"
          >
            <img src={second} alt="Logo 2" className="h-28 md:h-[6rem] py-4" />
            <h2 className="text-xl md:text-base xl:text-lg pb-2 font-body font-normal group-hover:text-white">
              Quality completion
            </h2>
            <p className="text-base md:text-xs xl:text-sm font-roboto text-[#242424] group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sed duis blandit tincidunt massa sed arcu posuere.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="flip-up"
            data-aos-duration="1500"
            className="h-full min-h-64 bg-white p-4 hover:bg-black group"
          >
            <img src={third} alt="third" className="h-28 md:h-[6rem] py-4" />
            <h2 className="text-xl md:text-base xl:text-lg pb-2 font-body font-normal group-hover:text-white">
              Maintaining Budgetary
            </h2>
            <p className="text-base md:text-xs xl:text-sm font-roboto text-[#242424] group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sed duis blandit tincidunt massa sed arcu posuere.
            </p>
          </div>

          {/* Card 4 */}
          <div
            data-aos="flip-down"
            data-aos-duration="1500"
            className="h-full min-h-60 bg-white p-4 hover:bg-black group"
          >
            <img src={fourth} alt="Logo 4" className="h-28 md:h-[6rem] py-4" />
            <h2 className="text-xl md:text-base xl:text-lg text-gray-800 pb-2 font-body font-normal group-hover:text-white">
              Quality ensuring
            </h2>
            <p className="text-base md:text-xs xl:text-sm font-roboto text-gray-600 group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sed duis blandit tincidunt massa sed arcu posuere.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Worksection;
