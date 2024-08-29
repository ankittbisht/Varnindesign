import React from "react";
import img1 from "../../../../assets/Downloader 2.png";
import Slider from "react-slick";
import b from "../../../../assets/2.jpg";
import f from "../../../../assets/Rectangle 75.png";

function Herosection() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div>
        <button
          className="p-[5px] md:p-0 border-[1px] md:border-none  bg-white  md:bg-transparent flex justify-center items-center  rounded-full w-[40px] h-[40px] absolute  top-[340px]  md:top-[350px] lg:top-[450px] left-[80px] md:left-[18%] lg:left-[270px] z-10"
          onClick={onClick}
        >
          <svg
            width="41"
            height="9"
            viewBox="0 0 41 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.4837 4.8267C40.679 4.63144 40.679 4.31485 40.4837 4.11959L37.3017 0.937611C37.1065 0.742348 36.7899 0.742348 36.5946 0.937611C36.3994 1.13287 36.3994 1.44946 36.5946 1.64472L39.423 4.47314L36.5946 7.30157C36.3994 7.49683 36.3994 7.81342 36.5946 8.00868C36.7899 8.20394 37.1065 8.20394 37.3017 8.00868L40.4837 4.8267ZM0.368896 4.97314H40.1302V3.97314H0.368896V4.97314Z"
              fill="black"
            ></path>
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
          className="p-[5px] md:p-0 border-[1px] md:border-none bg-white  md:bg-transparent   flex justify-center items-center rounded-full w-[40px] h-[40px] absolute top-[340px] md:top-[350px] lg:top-[450px] left-[33px] md:left-[12%] lg:left-[220px] z-10"
          onClick={onClick}
        >
          <svg
            width="41"
            height="9"
            viewBox="0 0 41 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.482353 4.11959C0.28709 4.31485 0.28709 4.63143 0.482353 4.82669L3.66433 8.00868C3.8596 8.20394 4.17618 8.20394 4.37144 8.00868C4.5667 7.81341 4.5667 7.49683 4.37144 7.30157L1.54301 4.47314L4.37144 1.64471C4.5667 1.44945 4.5667 1.13287 4.37144 0.937607C4.17618 0.742345 3.8596 0.742345 3.66433 0.937607L0.482353 4.11959ZM40.5972 3.97314L0.835907 3.97314L0.835907 4.97314L40.5972 4.97314L40.5972 3.97314Z"
              fill="black"
            ></path>
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
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <div className="mx-auto pt:0 md:pt-4 pb-0 md:pb-16 overflow-hidden md:min-h-screen">
            <div className="grid grid-cols-12 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col justify-center relative text-left
 z-10 left-8 top-0 md:left-[24%] lg:left-[220px] md:top-[-40px] min-w-[70dvw] md:min-w-[490px]  lg:min-w-[410px] text-white md:text-black"
              >
                {/* Heading */}
                <h2 className="text-2xl md:text-[30px]  lg:text-[40px] 2xl:text-5xl leading-10 md:font-normal font-body mb-2 text-black font-medium">
                  Witness superior quality, luxurious and value-engineered
                  buildings
                </h2>
                {/* Description */}
                <p className="text-sm md:text-xs 2xl:text-base text-white md:text-[#898989] mb-4 font-roboto text-left font-medium ">
                  We provide design consulting renderings with a touch of poetry
                </p>
                {/* Button */}
                <button
                  className="bg-[#0A23C7] text-center px-2 py-2
  text-white font-normal text-sm md:text-sm flex items-center gap-2 w-[230px] font-roboto justify-center transform transition-transform duration-300 hover:translate-x-2 hover:-translate-y-2 hover:-translate-z-2 relative overflow-hidden"
                >
                  Get first free consultation
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6875 9.87504C12.5711 9.75794 12.5057 9.59953 12.5057 9.43441C12.5057 9.2693 12.5711 9.11089 12.6875 8.99379L15.5625 6.12504H0.843737C0.677977 6.12504 0.519005 6.05919 0.401794 5.94198C0.284584 5.82477 0.218737 5.6658 0.218737 5.50004C0.218737 5.33428 0.284584 5.1753 0.401794 5.05809C0.519005 4.94088 0.677977 4.87504 0.843737 4.87504H15.5437L12.6875 2.01878C12.569 1.9011 12.5021 1.74114 12.5015 1.57412C12.5009 1.40709 12.5667 1.24668 12.6844 1.12816C12.8021 1.00964 12.962 0.942729 13.129 0.942143C13.2961 0.941557 13.4565 1.00734 13.575 1.12503L17.55 5.10629C17.6549 5.2117 17.7139 5.3544 17.7139 5.50316C17.7139 5.65192 17.6549 5.79462 17.55 5.90004L13.575 9.87504C13.5169 9.93362 13.4478 9.98011 13.3716 10.0118C13.2954 10.0436 13.2137 10.0599 13.1312 10.0599C13.0487 10.0599 12.967 10.0436 12.8909 10.0118C12.8147 9.98011 12.7456 9.93362 12.6875 9.87504Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              {/* Right Column */}
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="relative"
              >
                {/* Image */}
                <img
                  src={img1}
                  alt="Image"
                  className="object-cover relative left-[-40px]  md:left-[-30px] lg:left-[-55px] min-w-[100dvw] md:min-w-[560px] md:h-[470px] lg:min-w-[678px] h-[400px] lg:h-[600px] xl:h-[650px] xl:min-w-[806px] "
                />
              </div>
            </div>
          </div>
        </div>

        {/* //second slider */}
        <div>
          <div className="mx-auto pt:0 md:pt-4 pb-0 md:pb-16 overflow-hidden md:min-h-screen">
            <div className="grid grid-cols-12 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col justify-center relative text-left
 z-10 left-8 top-0 md:left-[24%] lg:left-[220px] md:top-[-40px] min-w-[70dvw] md:min-w-[490px]  lg:min-w-[410px] text-white md:text-black"
              >
                {/* Heading */}
                <h2 className="text-2xl md:text-[30px]  lg:text-[40px] 2xl:text-5xl leading-10 md:font-normal font-body mb-2 text-black font-medium">
                  Witness superior quality, luxurious and value-engineered
                  buildings
                </h2>
                {/* Description */}
                <p className="text-sm md:text-xs 2xl:text-base text-white md:text-[#898989] mb-4 font-roboto text-left">
                  We provide design consulting renderings with a touch of poetry
                </p>
                {/* Button */}
                <button
                  className="bg-[#0A23C7] text-center px-2 py-2
  text-white font-normal text-sm md:text-sm flex items-center gap-2 w-[230px] font-roboto justify-center transform transition-transform duration-300 hover:translate-x-2 hover:-translate-y-2 hover:-translate-z-2 relative overflow-hidden"
                >
                  Get first free consultation
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6875 9.87504C12.5711 9.75794 12.5057 9.59953 12.5057 9.43441C12.5057 9.2693 12.5711 9.11089 12.6875 8.99379L15.5625 6.12504H0.843737C0.677977 6.12504 0.519005 6.05919 0.401794 5.94198C0.284584 5.82477 0.218737 5.6658 0.218737 5.50004C0.218737 5.33428 0.284584 5.1753 0.401794 5.05809C0.519005 4.94088 0.677977 4.87504 0.843737 4.87504H15.5437L12.6875 2.01878C12.569 1.9011 12.5021 1.74114 12.5015 1.57412C12.5009 1.40709 12.5667 1.24668 12.6844 1.12816C12.8021 1.00964 12.962 0.942729 13.129 0.942143C13.2961 0.941557 13.4565 1.00734 13.575 1.12503L17.55 5.10629C17.6549 5.2117 17.7139 5.3544 17.7139 5.50316C17.7139 5.65192 17.6549 5.79462 17.55 5.90004L13.575 9.87504C13.5169 9.93362 13.4478 9.98011 13.3716 10.0118C13.2954 10.0436 13.2137 10.0599 13.1312 10.0599C13.0487 10.0599 12.967 10.0436 12.8909 10.0118C12.8147 9.98011 12.7456 9.93362 12.6875 9.87504Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              {/* Right Column */}
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="relative"
              >
                {/* Image */}
                <img
                  src={b}
                  alt="Image"
                  className="object-cover relative left-[-40px]  md:left-[-30px] lg:left-[-55px] min-w-[100dvw] md:min-w-[560px] md:h-[470px] lg:min-w-[678px] h-[400px] lg:h-[600px] xl:h-[650px] xl:min-w-[806px] "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Third Slider */}
        <div>
          <div className="mx-auto pt:0 md:pt-4 pb-0 md:pb-16 overflow-hidden md:min-h-screen">
            <div className="grid grid-cols-12 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col justify-center relative text-left
 z-10 left-8 top-0 md:left-[24%] lg:left-[220px] md:top-[-40px] min-w-[70dvw] md:min-w-[490px]  lg:min-w-[410px] text-white md:text-black"
              >
                {/* Heading */}
                <h2 className="text-2xl md:text-[30px]  lg:text-[40px] 2xl:text-5xl leading-10 md:font-normal font-body mb-2 text-black font-medium">
                  Witness superior quality, luxurious and value-engineered
                  buildings
                </h2>
                {/* Description */}
                <p className="text-sm md:text-xs 2xl:text-base text-white md:text-[#898989] mb-4 font-roboto text-left">
                  We provide design consulting renderings with a touch of poetry
                </p>
                {/* Button */}
                <button
                  className="bg-[#0A23C7] text-center px-2 py-2
  text-white font-normal text-sm md:text-sm flex items-center gap-2 w-[230px] font-roboto justify-center transform transition-transform duration-300 hover:translate-x-2 hover:-translate-y-2 hover:-translate-z-2 relative overflow-hidden"
                >
                  Get first free consultation
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6875 9.87504C12.5711 9.75794 12.5057 9.59953 12.5057 9.43441C12.5057 9.2693 12.5711 9.11089 12.6875 8.99379L15.5625 6.12504H0.843737C0.677977 6.12504 0.519005 6.05919 0.401794 5.94198C0.284584 5.82477 0.218737 5.6658 0.218737 5.50004C0.218737 5.33428 0.284584 5.1753 0.401794 5.05809C0.519005 4.94088 0.677977 4.87504 0.843737 4.87504H15.5437L12.6875 2.01878C12.569 1.9011 12.5021 1.74114 12.5015 1.57412C12.5009 1.40709 12.5667 1.24668 12.6844 1.12816C12.8021 1.00964 12.962 0.942729 13.129 0.942143C13.2961 0.941557 13.4565 1.00734 13.575 1.12503L17.55 5.10629C17.6549 5.2117 17.7139 5.3544 17.7139 5.50316C17.7139 5.65192 17.6549 5.79462 17.55 5.90004L13.575 9.87504C13.5169 9.93362 13.4478 9.98011 13.3716 10.0118C13.2954 10.0436 13.2137 10.0599 13.1312 10.0599C13.0487 10.0599 12.967 10.0436 12.8909 10.0118C12.8147 9.98011 12.7456 9.93362 12.6875 9.87504Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              {/* Right Column */}
              <div
                data-aos="flip-up"
                data-aos-duration="1000"
                className="relative"
              >
                {/* Image */}
                <img
                  src={f}
                  alt="Image"
                  className="object-cover relative left-[-40px]  md:left-[-30px] lg:left-[-55px] min-w-[100dvw] md:min-w-[560px] md:h-[470px] lg:min-w-[678px] h-[400px] lg:h-[600px] xl:h-[650px] xl:min-w-[806px] "
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default Herosection;
