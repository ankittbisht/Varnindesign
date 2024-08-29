import React from "react";
import Herosection from "./utils/Herosection";
import Aboutsection from "./utils/Aboutsection";
import Chooseussection from "./utils/Chooseussection";
import Contactsection from "./utils/Contactsection";
import Slidersection from "./utils/Slidersection";
import Worksection from "./utils/Worksection";
import { Helmet } from "react-helmet";

function Homepage() {
  return (
    <>
      <Helmet>
        <title>
          Varnin Design Consultancy | Innovative Architecture & Strategic Design
          Solutions
        </title>
        <meta
          name="description"
          content="Welcome to Varnin Design Consultancy. Discover cutting-edge architectural solutions and strategic design services. Let us help bring your visionary projects to life with our expertise."
        />
      </Helmet>
      <Herosection />
      <Aboutsection />
      <Worksection />
      <Chooseussection />
      <Slidersection />
      <Contactsection />
    </>
  );
}

export default Homepage;
