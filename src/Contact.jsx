import React, { useState } from "react";
// import "./index.css";

const Contact = () => {
  const [data, setdata] = useState({
    fname: "",
    Pnumber: "",
    email: "",
    msg: ""
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fname}.My mobile no. is ${data.Pnumber},my Email is ${data.email} ,and I want to say that ${data.msg}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fname"
                  value={data.fname}
                  onChange={InputEvent}
                  placeholder="Enter yout name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Pnumber"
                  value={data.Pnumber}
                  onChange={InputEvent}
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="5"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
