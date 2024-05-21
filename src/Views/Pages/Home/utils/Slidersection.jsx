import React from "react";
import Slider from "react-slick";
import img from "../../../../assets/Rectangle 75.png";
import img2 from "../../../../assets/Downloader 2.png";
import arrow from "../../../../assets/arrow.svg";

function Slidersection() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div>
        <button
          className="border-[1px] border-white flex justify-center items-center  rounded-full w-[50px] h-[50px] absolute top-[860px] md:top-[50px] right-[300px] md:right-[75px] z-10 hover:scale-125 transition-all ease-in-out duration-300"
          onClick={onClick}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2539_816)">
              <path
                d="M16.172 11L10.808 5.63605L12.222 4.22205L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2539_816">
                <rect width="24" height="24" fill="black" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div>
        <button
          className="border-[1px] border-white flex justify-center items-center rounded-full w-[50px] h-[50px] absolute top-[860px] md:top-[50px] right-[360px] md:right-[135px] z-10 hover:scale-125 transition-all ease-in-out duration-300"
          onClick={onClick}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2539_821)">
              <path
                d="M7.828 11L13.192 5.63605L11.778 4.22205L4 12L11.778 19.778L13.192 18.364L7.828 13H20V11H7.828Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2539_821">
                <rect
                  width="24"
                  height="24"
                  fill="black"
                  transform="matrix(-1 0 0 1 24 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <div className="container mx-auto grid grid-cols-12 md:grid-cols-3 gap-4 bg-[#0A23C7] pb-24 md:pb-0  px-4 md:px-0 md:pl-[160px] pt-4 md:pt-36">
            <div data-aos="fade-up"
                data-aos-duration="1000" className="col-span-12 md:col-span-1  py-8 ">
              <h2
                className="text-4xl pr-8 mb-4 font-roboto font-semibold text-white">
                Beijing Hualian Group Taiyuan
              </h2>

              {/* leading-6 */}
              <div className="font-roboto font-normal leading-6  text-sm 2xl:text-base mb-8 md:mb-20 text-white opacity-70">
                <p className="">Beijing Hualian Group Taiyuan+</p>
                <p className="">Beijing Hualian Group Taiyuan</p>
                <p className="mb-16 md:mb-4">
                  A new 99,861m2 6 level shopping center, and a 9,325m2 public
                  plaza on top of an underground parking podium. The design
                  intent is to create a contemporary bold design for BHG that
                  incorporates elongated pixelated glass that wraps the facade
                  in a sleek geometric skin. The glass is illuminated from
                  behind to produce a mysterious effect as the atmosphere
                  transforms from day to night.
                </p>
                <p className="">Taiyuan, Shanxi, China 2016</p>
              </div>
              <h5 className="font-body text-lg 2xl:text-xl text-white">1/2</h5>
            </div>
            <div data-aos="flip-up" data-aos-duration="1000" className="col-span-12 md:col-span-2 pt-8 ">
              <div className="flex flex-col items-center relative ">
                <img
                  src={img}
                  alt="Image 2"
                  className="  h-full md:h-[492px] 2xl:h-full"
                />
                {/* <button className=" border-[1px] rounded-full top-[270px] md:top-[-125px] left-0 md:left-[550px] absolute">
                  <img src={arrow} alt="" className="h-full p-2" />
                </button>
                <button className=" border-[1px] rounded-full top-[270px] md:top-[-125px] left-14 md:left-[610px] absolute">
                  <img src={arrow} alt="" className="h-full p-2  rotate-180" />
                </button> */}
                <h2 className="text-7xl md:text-[130px] 2xl:text-[150px] -top-10 md:-top-20 left-0 text-white font-normal font-body absolute">
                  Projects
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div>
        <div className="container mx-auto grid grid-cols-12 md:grid-cols-3 gap-4 bg-[#0A23C7] pb-24 md:pb-0  px-4 md:px-0 md:pl-[160px] pt-4 md:pt-36">
            <div data-aos="fade-up"
                data-aos-duration="1000" className="col-span-12 md:col-span-1  py-8 ">
              <h2
                className="text-4xl pr-8 mb-4 font-roboto font-semibold text-white">
                Beijing Hualian Group Taiyuan
              </h2>

              {/* leading-6 */}
              <div className="font-roboto font-normal leading-6  text-sm 2xl:text-base mb-8 md:mb-20 text-white opacity-70">
                <p className="">Beijing Hualian Group Taiyuan+</p>
                <p className="">Beijing Hualian Group Taiyuan</p>
                <p className="mb-16 md:mb-4">
                  A new 99,861m2 6 level shopping center, and a 9,325m2 public
                  plaza on top of an underground parking podium. The design
                  intent is to create a contemporary bold design for BHG that
                  incorporates elongated pixelated glass that wraps the facade
                  in a sleek geometric skin. The glass is illuminated from
                  behind to produce a mysterious effect as the atmosphere
                  transforms from day to night.
                </p>
                <p className="">Taiyuan, Shanxi, China 2016</p>
              </div>
              <h5 className="font-body text-lg 2xl:text-xl text-white">2/2</h5>
            </div>
            <div data-aos="flip-up" data-aos-duration="1000" className="col-span-12 md:col-span-2 pt-8 ">
              <div className="flex flex-col items-center relative ">
                <img
                  src={img}
                  alt="Image 2"
                  className="  h-full md:h-[492px] 2xl:h-full"
                />
                {/* <button className=" border-[1px] rounded-full top-[270px] md:top-[-125px] left-0 md:left-[550px] absolute">
                  <img src={arrow} alt="" className="h-full p-2" />
                </button>
                <button className=" border-[1px] rounded-full top-[270px] md:top-[-125px] left-14 md:left-[610px] absolute">
                  <img src={arrow} alt="" className="h-full p-2  rotate-180" />
                </button> */}
                <h2 className="text-7xl md:text-[130px] 2xl:text-[150px] -top-10 md:-top-20 left-0 text-white font-normal font-body absolute">
                  Projects
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default Slidersection;
