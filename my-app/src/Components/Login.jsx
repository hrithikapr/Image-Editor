import React from 'react';
import { Formik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';
import { loginValidation } from '../Validator/valid';
import "../App.css";
import Swal from 'sweetalert2';
// import Footer from './Footer'


const Login = () => {

  const navigate = useNavigate();

  const userLogin = async (values, { resetForm }) => {
    console.log(values);
    // resetForm({ value: '' });

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
        text: 'Login Success'
      })
      const data = await res.json();
      sessionStorage.setItem('user', JSON.stringify(data))
      navigate('/editor');
      // resetForm();
    } else if (res.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Login Failed'
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }

  }

  const style = {
    card: {
      width: "30rem",
      backgroundColor: "#f6ffff",
      boxShadow: "var(--card-border)"
    }
  }

  return (
    <>
      <div className="card m-auto mt-5" style={style.card}>
        <div className="card-title m-auto mt-3">
          <img src="https://i.pinimg.com/originals/8a/cb/6b/8acb6b90fcced59013cea185cc453c9c.png" height={40} alt="Logo" />
        </div>
        <div className="card-body mt-3">
          <Formik onSubmit={userLogin} initialValues={{ email: '', password: '' }} validationSchema={loginValidation}>
            {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
              <form onSubmit={handleSubmit}>

                <div className="form-outline mb-4">
                  <MDBInput type="email" id="email" className="form-control"
                    style={{ border: "1px solid lightblue" }}
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
                    style={{ border: "1px solid lightblue" }}
                    autoComplete="off" name="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  {errors.password && touched.password ? (
                    <p className="form-error text-danger small">{errors.password}</p>) : null}
                </div>

                <div className="row mb-4 small">
                  <div className="col ">

                    <span> </span>
                    <NavLink to="!#">Forget password</NavLink>

                  </div>
                  <div className="col">
                    <span>Not a member? </span>
                    <NavLink to="/signup">Signup</NavLink>
                  </div>
                </div>

                <button type="submit" className="btn btn-info btn-block mb-4">
                  Sign in
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
      {/* <Footer /> */}
    </>
  )
}

export default Login;