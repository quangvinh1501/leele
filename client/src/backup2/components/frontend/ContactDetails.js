import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const ContactDetails = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending....");
    const { name, email, mobile, msg } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      mobile: mobile.value,
      msg: msg.value,
    };
    console.log(process.env.REACT_APP_API_URL);
    let response = await fetch(process.env.REACT_APP_API_URL + "contact", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    if (result.status === "OK") {
      toast.success("Message Sent", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("ERROR", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <div id="contact-map" className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8458896040333!2d55.140661684993006!3d25.073211983953943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cab4431bd17%3A0x415efeb511f4cb04!2sM%26N+Nail+Spa!5e0!3m2!1sar!2sae!4v1500987202807"
          style={{ border: "0px", width: "100%", height: "350px" }}
          allowFullScreen=""
          title="maps"
        />
      </div>
      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="contact-list fix">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-contact">
                  <div className="contact-icon">
                    <a href="#">
                      <i className="zmdi zmdi-phone"></i>
                    </a>
                  </div>
                  <div className="contact-desc">
                    <p>
                      +04 435 6630
                      <br />
                      +012 345 678 102
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-contact text-center">
                  <div className="contact-icon">
                    <a href="#">
                      <i className="zmdi zmdi-dribbble"></i>
                    </a>
                  </div>
                  <div className="contact-desc">
                    <p>
                      info@mandnnailspa.com
                      <br />
                      contact@mandnnailspa.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-contact float-right">
                  <div className="contact-icon">
                    <a href="#">
                      <i className="zmdi zmdi-pin"></i>
                    </a>
                  </div>
                  <div className="contact-desc">
                    <p>
                      Shop No.1, Ground Floor, <br />
                      La Riviera Tower, Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="section-title text-center">
                <h2>Get in touch</h2>
                <p>Leave a message for quick contact.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="contact-form">
                <form
                  className="contact-form form-validate"
                  onSubmit={handleSubmit}
                >
                  <input name="name" type="text" placeholder="Name" required />
                  <br />
                  <br />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <br />
                  <br />
                  <input name="mobile" type="number" placeholder="Mobile" />
                  <br />
                  <br />
                  <textarea
                    name="msg"
                    placeholder="Message"
                    required
                    rows="4"
                  ></textarea>
                  <br />
                  <br />
                  <button
                    type="submit"
                    name="Submit"
                    value="Contact"
                    className=""
                    style={{
                      padding: "12px",
                      width: "100%",
                      backgroundColor: "#4f2e29",
                      color: "#fff",
                      border: "1px solid #4f2e29",
                    }}
                  >
                    {status}
                  </button>
                </form>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="contact-form-img text-center">
                <img src="../../../images/contact.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactDetails;
