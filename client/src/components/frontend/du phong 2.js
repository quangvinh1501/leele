import React, { useState } from "react";
import NavBar from "./NavBar";
import Toast from 'react-bootstrap/Toast'
const {ToastContainer} = Toast; // This is a React Element.
const ContactPage = () => {
    const [status, setStatus] = useState("Submit");
    const [position, setPosition] = useState('middle-center');
    const [show, setShow] = useState(false);
    const [messagebox, setMessageBox] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending....");
        const { firstName, lastName, email, phone, message } = e.target.elements;
        let details = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            message: message.value
        };
        console.log(process.env.REACT_APP_API_URI);
        let response = await fetch(process.env.REACT_APP_API_URI+"contact", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8", },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        setShow(true);
        setMessageBox(result.status);
    }
    return (
        <>
            <NavBar />
            <div className="container" style={{ marginTop: '70px', background: "rgb(238, 238, 238)", paddingTop: '20px' }}>
                <div className="contact__wrapper shadow-lg mt-n9">
                    <div className="row no-gutters">
                        <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                            <h3 className="color--white mb-5">Get in Touch</h3>
                            <ul className="contact-info__list list-style--none position-relative z-index-101">
                                <li className="mb-4 pl-4">
                                    <span className="position-absolute"><i className="fas fa-envelope"></i></span> support@bootdey.com
                                </li>
                                <li className="mb-4 pl-4">
                                    <span className="position-absolute"><i className="fas fa-phone"></i></span> (021)-241454-545
                                </li>
                                <li className="mb-4 pl-4">
                                    <span className="position-absolute"><i className="fas fa-map-marker-alt"></i></span> bootdey Technologies Inc.
                                    <br /> 2694 Queen City Rainbow Drive
                                    <br /> Florida 99161

                                    <div className="mt-3">
                                        <a href="https://www.google.com/maps" target="_blank" className="text-link link--right-icon text-white">Get directions <i class="fas fa-map-marker-alt"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                            <form className="contact-form form-validate" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label className="required-field" htmlFor="firstName">First Name</label>
                                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Wendy" />
                                        </div>
                                    </div>

                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Appleseed" />
                                        </div>
                                    </div>

                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label className="required-field" htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" name="email" placeholder="wendy.apple@seed.com" />
                                        </div>
                                    </div>

                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="tel" className="form-control" id="phone" name="phone" placeholder="(021)-454-545" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <label className="required-field" htmlFor="message">How can we help?</label>
                                            <textarea className="form-control" id="message" name="message" rows="4" placeholder="Hi there, I would like to....."></textarea>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 mb-3">
                                        <button type="submit" name="submit" className="btn btn-primary">{status}</button>
                                    </div>

                                </div>
                            </form>
                            <div
                                aria-live="polite"
                                aria-atomic="true"
                                className="bg-dark position-relative"
                                style={{ minHeight: '240px' }}
                            >
                                <ToastContainer onClose={() => setShow(false)} show={show} delay={3000} autohide className="d-inline-block m-1" position={position} bg={messagebox=="ERROR"? "danger" : "success"}>
                                    <Toast>
                                        <Toast.Header closeButton={true}>
                                            <img
                                                src="../../../icon/notification.png"
                                                className="rounded me-2"
                                                alt=""
                                            />
                                            <strong className="me-auto">notice</strong>
                                        </Toast.Header>
                                        <Toast.Body>{messagebox}</Toast.Body>
                                    </Toast>
                                </ToastContainer>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;