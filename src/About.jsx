import React from "react";

import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page of "
        imgsrc={
          "https://img.freepik.com/premium-vector/mind-map-concept-illustration_270158-467.jpg?w=740"
        }
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
