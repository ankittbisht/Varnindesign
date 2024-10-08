import React from "react";
import img2 from "../../../assets/projectbanner.jpg";
import img from "../../../assets/bg.jpg";
import contact from "../../../assets/contact.jpg";
import fb from "../../../assets/fb.svg";
import linkedin from "../../../assets/linkedin.svg";
import insta from "../../../assets/insta.svg";
import { Helmet } from "react-helmet";

function Contactpage() {
  return (
    <>
      <Helmet>
        <title>
          Contact Us | Varnin Design Consultancy - Let's Work Together
        </title>
        <meta
          name="description"
          content="Get in touch with Varnin Design Consultancy. Whether you have a question or want to start a project, we're here to help. Reach out to us for expert architectural and design services."
        />
      </Helmet>
      <section>
        <div
          className="flex justify-center items-center h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <h1 className="text-5xl md:text-[130px] text-white font-body">
            Contact
          </h1>
        </div>

        <div className="grid grid-cols-2 px-5 md:px-36 py-5 md:py-16">
          <div className="col-span-2 md:col-span-1 bg-white max-w-md mx-auto">
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-4xl font-body mb-4"
            >
              Have a project to discuss, get in touch.
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block font-medium mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#0A23C7]  text-white font-medium py-2 px-4 rounded-md hover:scale-110 hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-center pt-5 md:pt-0">
            {/* Image div */}
            <img
              data-aos="fade-right"
              data-aos-duration="700"
              src={img}
              alt="Contact"
              className="w-full object-cover h-[570px]"
            />
          </div>
        </div>
        <div className="container px-5 md:px-20">
          <div className="grid grid-cols-2 gap-4">
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="col-span-2 md:col-span-1 hidden md:block"
            >
              <img
                src={contact}
                alt="House"
                className="w-full h-[700px] object-cover"
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-start py-12 md:px-16">
              <div className="mb-16">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-3xl font-body mb-1"
                >
                  You can find us
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="text-gray-600 font-roboto text-base"
                >
                  Townhouse Partners Consulting, LLC
                  <br />
                  East 42nd Street, 54th Floor
                  <br />
                  New York, NY 10165
                </p>
              </div>
              <div className="mb-16">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="text-3xl font-body mb-1"
                >
                  {" "}
                  Get in touch
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="text-gray-600 text-base font-roboto"
                >
                  info@townhousepartners.com
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="text-gray-600 text-base font-roboto"
                >
                  (212) 235 2250
                </p>
              </div>

              <div className="col-span-6 md:col-span-1 text-center flex  flex-col  items-start ">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="text-3xl font-body mb-4"
                >
                  Follow us
                </h1>
                <div className="flex justify-center">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="800"
                    className="flex items-start md:items-center flex-row gap-4 md:gap-2 text-sm font-body font-normal"
                  >
                    <a
                      href="https://facebook.com"
                      className=" flex items-center"
                    >
                      <img
                        src={fb}
                        alt="Logo"
                        className="h-8 border  rounded-full bg-black"
                      />
                    </a>
                    <a
                      href="https://facebook.com"
                      className=" flex items-center"
                    >
                      <img
                        src={linkedin}
                        alt="Logo"
                        className="h-8 border bg-black   rounded-full "
                      />
                    </a>
                    <a
                      href="https://facebook.com"
                      className=" flex items-center"
                    >
                      <img
                        src={insta}
                        alt="Logo"
                        className="h-8 border bg-black  rounded-full "
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactpage;
