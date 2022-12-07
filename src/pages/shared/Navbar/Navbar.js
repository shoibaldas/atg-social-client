import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/whole.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3">
            <div className="container-fluid">
                <div className='col-md-3'>
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="container">

                    <div className="row height d-flex justify-content-center align-items-center">

                        <div className='col-md-8'>
                            <div className="search position-relative">
                                <div className='position-absolute' style={{ top: '0.5rem', left: '0.6rem' }}>
                                    <i className="fa fa-search"></i>
                                </div>
                                <input type="text" className="px-5 form-control border-0 rounded-pill bg-light" placeholder="Search for your favorite groups in ATG" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-md-3'>
                    <ul className="navbar-nav me-auto d-flex">
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark h5 fw-normal fs-6" href="/" target="blank">Create account. <span className='text-primary fw-bolder'>It's free</span><i className="px-2 fa-solid fa-caret-down"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;