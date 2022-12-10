import React, { useEffect, useState } from 'react';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [theme, setTheme] = useState("light-theme");

    const toggleTheme = () => {

        theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme])


    return (
        <>
            <nav className="navbar navbar-expand-lg ">

                <div className="container">

                    <NavLink className="navbar-brand me-2" to="/">
                        <img
                            src="https://i.pinimg.com/originals/8a/cb/6b/8acb6b90fcced59013cea185cc453c9c.png"
                            height={40}
                            alt="Logo"
                            loading="lazy"
                            style={{ marginTop: "-1px" }}
                        />
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>

                    <div className="collapse navbar-collapse text-uppercase" id="navbarButtonsExample">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/editor">
                                    Editor
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center">

                            <NavLink type="button" className="nav-link logbtn me-3" to="/login">
                                Login/ signup
                            </NavLink>
                            <i className="fas fa-moon fa-lg cursor-pointer" onClick={() => { toggleTheme() }} style={{ cursor: 'pointer' }}></i>
                        </div>
                    </div>

                </div>

            </nav>

        </>)
}

export default Navbar;