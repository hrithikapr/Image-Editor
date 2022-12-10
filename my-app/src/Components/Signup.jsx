import React from 'react';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import { signupValidation } from '../Validator/valid';
import '../App.css';


const style = {

    card: {
        width: "30rem",
        backgroundColor: "#f6ffff",
        boxShadow: "var(--card-border)"
    }
}

const Signup = () => {

    const userSubmit = async (values, { resetForm }) => {
        console.log(values);
        

        const res = await fetch('http://localhost:5000/user/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        });

        console.log(res.status);
        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'You have registered successfully'
            })
            resetForm();
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }

    }


    return (
        <>
            <div className="card m-auto mt-5" style={style.card}>
                <div className="card-title m-auto mt-3">
                    <img src="https://i.pinimg.com/originals/8a/cb/6b/8acb6b90fcced59013cea185cc453c9c.png" height={40} alt="Logo" />
                </div>
                <div className="card-body mt-3">
                    <Formik onSubmit={userSubmit} initialValues={{ name: '', email: '', password: '' }} validationSchema={signupValidation}>
                        {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="form-outline mb-4">
                                    <MDBInput type="text" id="form1" className="form-control"
                                        // style={{ border: "1px solid lightblue" }}
                                        autoComplete="off" name="name"
                                        label="Username"
                                        groupicon="user"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {errors.name && touched.name ? (
                                        <p className="form-error text-danger small">{errors.name}</p>) : null}

                                </div>
                                <div className="form-outline mb-4">
                                    <MDBInput type="email" id="email" className="form-control"
                                        // style={{ border: "1px solid lightblue" }}
                                        autoComplete="off" name="email"
                                        label="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {errors.email && touched.email ? (
                                        <p className="form-error text-danger small">{errors.email}</p>) : null}
                                </div>

                                <div className="form-outline mb-4">
                                    <MDBInput type="password" id="password" className="form-control"
                                        // style={{ border: "1px solid lightblue" }}
                                        autoComplete="off" name="password"
                                        label="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {errors.password && touched.password ? (
                                        <p className="form-error text-danger small">{errors.password}</p>) : null}
                                </div>

                                <div className="row mb-4 small">
                                    <div className="col d-flex justify-content-center">

                                        <div className="form-check">
                                            <MDBCheckbox
                                                className="form-check-input"
                                                label="Remember me"
                                                id="form2Example34"
                                                defaultChecked="true"
                                            />
                                        </div>

                                    </div>
                                    <div className="col">
                                        <span>Have an account </span>
                                        <NavLink to="/login">LogIn</NavLink>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-info btn-block mb-4">
                                    Sign up
                                </button>
                            </form>
                        )}
                    </Formik>
                    <div className="card-footer">

                        <div className="text-center">

                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-facebook-f" />
                            </button>
                            <button type="button" className="btn btn-danger btn-floating mx-1">
                                <i className="fab fa-google" />
                            </button>
                            <button type="button" className="btn btn-info btn-floating mx-1">
                                <i className="fab fa-twitter" />
                            </button>
                            <button type="button" className="btn btn-danger btn-floating mx-1">
                                <i className="h6 fab fa-pinterest" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup;