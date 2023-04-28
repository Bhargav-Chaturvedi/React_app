import React from "react";
import { NavLink } from "react-router-dom";
// import "./index.scss";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center mt-lg-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pd-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Bhargav's App</strong>
                  </h1>
                  <h2 className="my-3">
                    We develope Websites for you, According to your Preference
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="btn-get-start mb-0 mb-sm-5"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Loading..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
