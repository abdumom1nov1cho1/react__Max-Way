import React from "react";
import Footer from "../Footer/Footer";
// import Navbar from '../Navbar/Navbar'
// import Sendvich from '../Sendvich/Sendvich'
import "./About.css";

import AboutText from "../AboutText/AboutText";
import Navbar from "../Navbar/Navbar";

function About() {
  return (
    <div>
      <Navbar/>
      <AboutText />
      <Footer />
    </div>
  );
}

export default About;
