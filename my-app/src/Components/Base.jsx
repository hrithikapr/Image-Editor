import React from 'react'
import { NavLink } from 'react-router-dom'
import './Base.css';

function Base(props) {
    return (

        <section id="header" className="d-flex align-items-center">
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>
                                    {props.name} <strong className='brand-name'>Sketz</strong>
                                </h1>
                                <h2 className="my-3">We are the team of this filter website</h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="stbtn">{props.btname}</NavLink>
                                </div>
                                <div className="i-icons">
                                    <NavLink to="#" type="button" className="btn btn-outline btn-floating mx-1">
                                        <i className="fab fa-facebook-f fa-lg" />
                                    </NavLink>
                                    <NavLink to="#" type="button" className="btn btn-outline btn-floating mx-1">
                                        <i className="fab fa-google" />
                                    </NavLink>
                                    <NavLink to="#" type="button" className="btn btn-outline btn-floating mx-1">
                                        <i className="fab fa-pinterest" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} alt="home img" className="img-fluid animated" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Base