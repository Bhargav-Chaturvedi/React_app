import React from "react";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
// import "./index.css";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your buisness with "
        imgsrc={
          "https://img.freepik.com/free-vector/illustration-web-design-template_53876-26983.jpg?w=1060&t=st=1682348448~exp=1682349048~hmac=d5d014ecf69ec5caf62f3d545d2560b10cf43992a9c24368ee048de01432e716"
        }
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
