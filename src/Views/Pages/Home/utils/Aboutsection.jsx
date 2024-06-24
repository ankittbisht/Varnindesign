import React from "react";
import img1 from "../../../../assets/Rectangle 4.png";
import img2 from "../../../../assets/Rectangle 5.png";

function Aboutsection() {
  return (
    <>
      <div className="mx-auto md:py-6 py-0 md:px-0 px-8 overflow-hidden">
        <div className="grid grid-col-12 md:grid-cols-2 gap-4 md:gap-4 lg:gap-4  xl:gap-12">
          {/* First Column */}
          <div className="relative">
            {/* First Image */}
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={img1}
              alt="First Image"
              className="md:block hidden z-10 absolute md:h-[430px] lg:h-[500px] xl:h-[600px] "
            />

            {/* Second Image */}
            <h1
              className="md:block hidden md:text-[55px] lg:text-[80px] xl:text-[90px] font-body font-normal z-20 absolute md:bottom-[20%] xl:top-[310px] lg:top-[250px] md:left-[40%] xl:left-[395px] lg:left-[310px] -rotate-90 w-[72%] lg:w-[450px] xl:w-[580px] text-[#000D4B54] opacity-30;
"
            >
              About Us
            </h1>
            <img
              src={img2}
              alt="Second Image"
              className="z-0 absolute w-[150px] md:w-[100%] lg:w-[255px] xl:w-[290px] h-[975px] md:h-[100%] lg:h-[500px] xl:h-[690px] top-0 md:top-[100px] left-[-32px] md:left-[50%] lg:left-[345px] xl:left-[430px]"
            />
          </div>

          {/* Second Column */}
          <div className="flex flex-col justify-start text-left w-full md:w-4/5 lg:w-[470px] xl:w-[500px] gap-2 ">
            {/* Heading */}
            <h2
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-3xl md:text-4xl xl:text-6xl font-body  font-normal  mb-2"
            >
              Who we are
            </h2>
            {/* Short Intro */}
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" mb-4 font-roboto text-sm md:text-xs xl:text-sm tracking-[0.5em] text-[#013A71]"
            >
              ABOUT VARNIN DESIGN CONSULTANCY
            </p>
            {/* Long Description */}
            <p className="text-sm  md:text-xs xl:text-sm font-roboto font-normal">
              Kevin is an influential architect experienced in radical
              technological , environmental, and humanistic changes currently
              being implemented into 21st century architectural thinking.
            </p>
            <p className="text-sm md:text-xs xl:text-sm font-roboto font-normal">
              A passionate, transformative, and highly motivated design
              professional leveraging executive experience in architecture,
              management, and strategic consulting.
            </p>

            <p className="text-sm md:text-xs xl:text-sm font-roboto font-normal">
              Kevin have been instrumental in fostering highly collaborative
              environments, driving innovation, and continuously achieving
              diverse range of creative goals, objectives, and milestones. Kevin
              devoted his career to promoting design excellence, streamlining
              project management, and inducting best practices in project
              delivery, entitlement, architecture, and construction.
            </p>

            <p className="text-sm md:text-xs xl:text-sm font-roboto font-normal">
              Being well-versed in collaborating cross-functionally with
              developers, architects, engineers, business consultants, builders,
              fabricators, and project management companies, Kevin have a proven
              history of supporting key decision-making efforts to continuously
              lead to successful outcomes. An adaptable, empathetic, and highly
              motivated to foster sustainable relationships with executive,
              architecture, and design teams, key stakeholders, and diverse
              domestic and international clientele.
            </p>

            <p className=" text-sm md:text-xs xl:text-sm  font-roboto font-normal">
              With profound knowledge of current and emerging industry trends,
              methodologies, technologies, and best practices, Kevin have a
              successful track record of meticulously reviewing contract
              documents and drawings for design alignment, scope, budgetary
              qualifications, clarity, and overall completeness.
            </p>

            <p className="text-sm md:text-xs xl:text-sm  font-roboto font-normal">
              An articulate communicator with credible history of coordinating
              and directing multi-billion-dollar budgets, fiscal administration,
              and project management efforts from inception to timely, within
              scope and budget project delivery. I believe that my experience
              and progressive career path will be helpful in achieving the main
              objectives of your organization. Kevin is looking for new
              challenges and opportunities to employ my technical skills and
              executive experiences at a higher strategic level.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutsection;
