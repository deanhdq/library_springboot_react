import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
            <div className="container-fluid">
                <span className="navbar-brand">
                   <NavLink to='/' className="text-decoration-none text-light">Library App</NavLink>
                </span>
                <button className="navbar-toggler"
                        type='button'
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarDropdown"
                        aria-controls="navbarDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/home' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/search' className="nav-link">Search Book</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item m-1">
                            <NavLink to='/sign-in' type='button' className="btn btn-outline-light">Sign in</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;