import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/whole.png';
import img from '../../../assets/signup/atg_illustration.png';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
const Navbar = () => {
    return (
        <nav className="d-none d-sm-none d-md-none d-lg-block navbar navbar-expand-lg navbar-light bg-white p-3">
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
                            <p className="nav-link text-dark h5 fw-normal fs-6">Create account. <button type="button" className="text-primary fw-bolder border-0 bg-transparent" data-bs-toggle="modal" data-bs-target="#myModal">It's free</button> <i className="px-2 fa-solid fa-caret-down"></i></p>
                        </li>
                    </ul>
                </div>
                {/* SignUp-Modal */}
                <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="myModal" aria-hidden="true" >
                    <div className="modal-dialog" style={{ maxWidth: '50rem', marginTop: '4rem' }}>
                        <div className="modal-content">
                            <div className="bg-light" style={{ borderRadius: '1rem' }}>
                                <div className="position-relative p-2 rounded text-center" style={{ background: '#EFFFF4' }}>
                                    <h5 className='mt-2 text-success' style={{ fontSize: '.8rem' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
                                    <button type="button" className="position-absolute p-1 btn bg-light" data-bs-dismiss="modal" style={{ top: '-2.5rem', right: '0rem', width: '2rem', height: '2rem', borderRadius: '50%' }}><i className="fa-solid fa-xmark"></i></button>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <p className='fs-5 fw-bolder text-black'>Create Account</p>
                                    </div>
                                    <div>

                                        <p className='' style={{ display: 'block', lineHeight: '.8rem' }}>Already have an account?<button type="button" className="fs-6 fw-semibold fw-bolder border-0 text-primary bg-transparent" data-bs-toggle="modal" data-bs-target="#myModal2" >Sign In</button></p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className="mb-3 ">

                                            <div className='d-flex'>
                                                <div>
                                                    <input disabled type="text" className="p-2 container-fluid" placeholder='First Name' />
                                                </div>
                                                <div>
                                                    <input disabled type="text" className="p-2 container-fluid" placeholder='Last Name' />
                                                </div>
                                            </div>
                                            <input disabled type="text" className="p-2 container-fluid" placeholder='Email' />
                                            <div className='position-relative'>
                                                <input disabled type="text" className=" p-2 container-fluid" placeholder='Password' />

                                                <AiOutlineEye className='position-absolute' style={{ top: '1rem', right: '1rem' }}></AiOutlineEye>

                                            </div>

                                            <input disabled type="text" className="p-2 container-fluid" placeholder='Confirm Password' />

                                            <button className='mt-4 btn btn-primary rounded-pill fw-semibold container fuild'>Create Account</button>

                                            <div className='mt-4 d-flex align-items-center justify-content-center border border-1' >
                                                <p className='p-2' style={{ margin: '0' }}><FaFacebook className='text-primary' style={{ width: '2rem', height: '1.5rem' }}></FaFacebook> Signup with Facebook</p>
                                            </div>
                                            <div className='mt-2 d-flex align-items-center justify-content-center border border-1' >
                                                <p className='p-2' style={{ margin: '0' }}><FcGoogle className='text-primary' style={{ width: '2rem', height: '1.5rem' }}></FcGoogle> Signup with Facebook</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-md-6 text-center'>
                                        <img src={img} alt="" />
                                        <p className='mt-3 fw-lighter' style={{ fontSize: '0.8rem' }}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Login-Modal */}
                <div className="modal fade" id="myModal2" tabIndex="-1" aria-labelledby="myModal2" aria-hidden="true" >
                    <div className="modal-dialog" style={{ maxWidth: '50rem', marginTop: '4rem' }}>
                        <div className="modal-content">
                            <div className="bg-light" style={{ borderRadius: '1rem' }}>
                                <div className="position-relative p-2 rounded text-center" style={{ background: '#EFFFF4' }}>
                                    <h5 className='mt-2 text-success' style={{ fontSize: '.8rem' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
                                    <button type="button" className="position-absolute p-1 btn bg-light" data-bs-dismiss="modal" style={{ top: '-2.5rem', right: '0rem', width: '2rem', height: '2rem', borderRadius: '50%' }}><i className="fa-solid fa-xmark"></i></button>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <p className='fs-5 fw-bolder text-black'>Sign In</p>
                                    </div>
                                    <div>
                                        <p>Don't have an account yet? <button type="button" className="fs-6 fw-semibold text-primary fw-bolder border-0 bg-transparent" data-bs-toggle="modal" data-bs-target="#myModal">Create new for free!</button></p>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className="mb-3 ">
                                            <input disabled type="text" className="p-2 container-fluid" placeholder='Email' />
                                            <div className='position-relative'>
                                                <input disabled type="text" className=" p-2 container-fluid" placeholder='Password' />

                                                <AiOutlineEye className='position-absolute' style={{ top: '1rem', right: '1rem' }}></AiOutlineEye>

                                            </div>

                                            <button className='mt-4 btn btn-primary rounded-pill fw-semibold container fuild'>Sign In</button>

                                            <div className='mt-4 d-flex align-items-center justify-content-center border border-1' >
                                                <p className='p-2' style={{ margin: '0' }}><FaFacebook className='text-primary' style={{ width: '2rem', height: '1.5rem' }}></FaFacebook> Signup with Facebook</p>
                                            </div>
                                            <div className='mt-2 d-flex align-items-center justify-content-center border border-1' >
                                                <p className='p-2' style={{ margin: '0' }}><FcGoogle className='text-primary' style={{ width: '2rem', height: '1.5rem' }}></FcGoogle> Signup with Facebook</p>
                                            </div>
                                            <div className='mt-4 d-flex align-items-center justify-content-center' >
                                                <p className='fw-bolder' style={{ margin: '0', fontSize: '.8rem' }}> Forget Password?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 text-center'>
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;