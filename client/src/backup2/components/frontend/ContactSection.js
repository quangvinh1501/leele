import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const ContactSection = () => {
    const [status, setStatus] = useState("Submit");
    const [message, setMessage] = useState("");
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }
    const findFormErrors = () => {
        const { lastName, firstName, email, phone, message } = form
        const newErrors = {}
        // lastName errors
        if (!lastName || lastName === '') newErrors.lastName = 'cannot be blank!'
        else if (lastName.length > 100) newErrors.lastName = 'lastName is too long!'
        // firstName errors
        if (!firstName || firstName === '') newErrors.firstName = 'cannot be blank!'
        else if (firstName.length > 100) newErrors.firstName = 'firstName is too long!'
        // email errors
        if (!email || email === '') newErrors.email = 'cannot be blank!'
        else if (email.length > 100) newErrors.email = 'email is too long!'
        //phone error
        const patternphone = /^[0-9\b]+$/;
        if (!phone || phone === '') newErrors.phone = 'cannot be blank!'
        else if (phone.length > 50) newErrors.phone = 'Phone number is too long!'
        else if (!phone || patternphone.test(phone) === false) newErrors.phone = 'Phone is not valid'
        // message errors
        if (!message || message === '') newErrors.message = 'cannot be blank!'
        else if (message.length > 1000) newErrors.message = 'message is too long!'

        return newErrors
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = findFormErrors()
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors)
        } else {
            setStatus("Sending....");
            const { lastName, firstName, email, phone, message } = form
            let details = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                message: message
            };
            let response = await fetch(process.env.REACT_APP_API_URI + "contact", {
                method: "POST",
                headers: { "Content-Type": "application/json;charset=utf-8", },
                body: JSON.stringify(details),
            });
            setStatus("Submit");
            let result = await response.json();
            setMessage(result.status);
            if (result.status === "ERROR") {
                toast.error(result.status, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.success(result.status, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        }

    }
    return (
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
                                    <a href="https://www.google.com/maps" target="_blank" className="text-link link--right-icon text-white">Get directions <i className="fas fa-map-marker-alt"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                        <Form className="contact-form form-validate" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6 mb-3">
                                    <Form.Group>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type='text'
                                            onChange={e => setField('firstName', e.target.value)}
                                            isInvalid={!!errors.firstName}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.firstName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <Form.Group>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type='text'
                                            onChange={e => setField('lastName', e.target.value)}
                                            isInvalid={!!errors.lastName}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.lastName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                                <div className="col-sm-6 mb-3">
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type='email'
                                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                            onChange={e => setField('email', e.target.value)}
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <Form.Group>
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            type='text'
                                            onChange={e => setField('phone', e.target.value)}
                                            isInvalid={!!errors.phone}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </div>

                                <div className="col-sm-12 mb-3">
                                    <Form.Group>
                                        <Form.Label>How can we help?</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Hi there, I would like to....."
                                            type='text'
                                            onChange={e => setField('message', e.target.value)}
                                            isInvalid={!!errors.message}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                                <div className="col-sm-12 mb-3">
                                    <Button variant="primary" type="submit">
                                        {status}
                                    </Button>
                                </div>

                            </div>
                        </Form>
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
            </div>
        </div>
    )
}

export default ContactSection;