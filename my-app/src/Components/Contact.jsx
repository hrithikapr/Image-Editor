import React from 'react'
import {
    MDBInput,
    MDBTextArea,
} from 'mdb-react-ui-kit';
import Base from './Base.jsx';
import { contactValidation } from '../Validator/valid';
import { Formik } from 'formik';

const Contact = () => {

    const contactUs = (values, { resetForm }) => {
        console.log(values);
        resetForm({ value: '' });
    }

    const style = {
        card: {
            color: "#333",
            width: "30rem",
            backgroundColor: "#f6ffff",
            boxShadow: "var(--card-border)"
        }

    }

    return (

        <>
            <section id="header2" className="container-fluid">
                <Base name='Contact us and share your views here'
                    imgsrc={"https://instaquoteapp.com/wp-content/uploads/2018/10/contact2.png"}
                    visit="/contact"
                    btname="Contact Now" />

                <div className="container ">
                    <div class="card m-auto mb-5" style={style.card}>
                        <div class="card-body">
                            <h5 class="card-title">Contact Us</h5>
                            <p class="card-text">Share your views with us</p>
                            <Formik onSubmit={contactUs} initialValues={{ name: '', email: '', msg: '' }} validationSchema={contactValidation}>
                                {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline mb-4">
                                            <MDBInput id='form4Example1'
                                                label='Name' name='name'
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {errors.name && touched.name ? (
                                                <p className="form-error text-danger small">{errors.name}</p>) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <MDBInput type='email' id='form4Example2'
                                                label='Email address'
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {errors.email && touched.email ? (
                                                <p className="form-error text-danger small">{errors.email}</p>) : null}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <MDBTextArea label='Message' id='textAreaExample'
                                                rows={4}
                                                name='msg'
                                                value={values.msg}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {errors.msg && touched.msg ? (
                                                <p className="form-error text-danger small">{errors.msg}</p>) : null}
                                        </div>
                                        <button type='submit' className='btn btn-primary  mb-4' block>
                                            Submit
                                        </button>
                                    </form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Contact