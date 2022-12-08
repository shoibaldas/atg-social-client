import React from 'react';
import { GoLocation } from "react-icons/go";
import { IoBriefcaseOutline } from "react-icons/io5";
import img1 from '../../../assets/cardImages/cardimage1.png';
import img2 from '../../../assets/cardImages/cardimage2.png';
import img3 from '../../../assets/cardImages/cardimage3.png';
import icon1 from '../../../assets/cardIcons/✍️ Article.png';
import icon2 from '../../../assets/cardIcons/🔬️ Education.png';
import icon3 from '../../../assets/cardIcons/🗓️ Meetup.png';
import icon4 from '../../../assets/cardIcons/💼️ Job.png';
import person1 from '../../../assets/feedpersons/person1.png';
import person2 from '../../../assets/feedpersons/person2.png';
import person3 from '../../../assets/feedpersons/person3.png';
import person4 from '../../../assets/feedpersons/person4.png';
import { Link } from 'react-router-dom';
const HomeFeed = () => {
    return (
        <div className="mt-4">
            <div className="col">
                <div className="col-lg-12 mb-4">
                    {/* card-1 */}
                    <div className="card mb-4">
                        <img src={img1} alt="" className="card-img-top" />
                        <div className="card-body">
                            <img src={icon1} alt="" />
                            <div className='d-flex position-relative'>
                                <div className='col-md-8'>
                                    <h5 className="mt-2 card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                                </div>
                                <div className='col-md-4 d-flex justify-content-end position-absolute dropdown' style={{ right: '.1rem', top: '1rem' }}>
                                    <a href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis text-black" ></i></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Edit</a></li>
                                        <li><a className="dropdown-item" href="/">Report</a></li>
                                        <li><a className="dropdown-item" href="/">Option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src={person1} alt="" />
                                    <p className='mx-4 fs-6 fw-bolder'>Sarthak Kamra</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <p><i className="fa-regular fa-eye"></i><span className='px-2'>1.4k views</span></p>
                                    </div>
                                    <div className='mx-4'>
                                        <button className='border-0 rounded-1 px-2 py-1'> <i className="fa-solid fa-share-nodes"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* card-2 */}
                    <div className="card mb-4">
                        <img src={img2} alt="" className="card-img-top" />
                        <div className="card-body">
                            <img src={icon2} alt="" />
                            <div className='d-flex position-relative'>
                                <div className='col-md-8'>
                                    <h5 className="mt-2 card-title">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                                </div>
                                <div className='col-md-4 d-flex justify-content-end position-absolute dropdown' style={{ right: '.1rem', top: '1rem' }}>
                                    <a href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis text-black" ></i></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Edit</a></li>
                                        <li><a className="dropdown-item" href="/">Report</a></li>
                                        <li><a className="dropdown-item" href="/">Option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src={person2} alt="" />
                                    <p className='mx-4 fs-6 fw-bolder'>Sarah West</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <p><i className="fa-regular fa-eye"></i><span className='px-2'>1.4k views</span></p>
                                    </div>
                                    <div className='mx-4'>
                                        <button className='border-0 rounded-1 px-2 py-1'> <i className="fa-solid fa-share-nodes"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* card-3 */}
                    <div className="card mb-4">
                        <img src={img3} alt="" className="card-img-top" />
                        <div className="card-body">
                            <img src={icon3} alt="" />
                            <div className='d-flex position-relative'>
                                <div className='col-md-8'>
                                    <h5 className="mt-2 card-title">Finance & Investment Elite Social Mixer @Lujiazui</h5>
                                </div>
                                <div className='col-md-4 d-flex justify-content-end position-absolute dropdown' style={{ right: '.1rem', top: '1rem' }}>
                                    <a href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis text-black" ></i></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Edit</a></li>
                                        <li><a className="dropdown-item" href="/">Report</a></li>
                                        <li><a className="dropdown-item" href="/">Option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <p><i className="fa-regular fa-calendar"></i><span className='fs-6 fw-semibold mx-2'>Fri, 12 Oct, 2018</span></p>
                                <p className='mx-4'><GoLocation></GoLocation><span className='fs-6 fw-semibold mx-2'>Ahmedabad, India</span></p>
                            </div>
                            <div className='col-md-12 border border-1 rounded p-2 text-center mt-2 mb-4'>
                                <Link to='/' className='text-danger text-decoration-none fs-6 fw-semibold'>Visit Website</Link>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src={person3} alt="" />
                                    <p className='mx-4 fs-6 fw-bolder'>Ronal Jones</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <p><i className="fa-regular fa-eye"></i><span className='px-2'>1.4k views</span></p>
                                    </div>
                                    <div className='mx-4'>
                                        <button className='border-0 rounded-1 px-2 py-1'> <i className="fa-solid fa-share-nodes"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* card-4 */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <img src={icon4} alt="" />
                            <div className='d-flex position-relative'>
                                <div className='col-md-8'>
                                    <h5 className="mt-2 card-title">Software Developer</h5>
                                </div>
                                <div className='col-md-4 d-flex justify-content-end position-absolute dropdown' style={{ right: '.1rem', top: '1rem' }}>
                                    <a href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis text-black" ></i></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Edit</a></li>
                                        <li><a className="dropdown-item" href="/">Report</a></li>
                                        <li><a className="dropdown-item" href="/">Option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <p><IoBriefcaseOutline></IoBriefcaseOutline><span className='fs-6 fw-semibold mx-2'>Innovaccer Analytics Private Ltd.</span></p>
                                <p className='mx-4'><GoLocation></GoLocation><span className='fs-6 fw-semibold mx-2'>Noida, India</span></p>
                            </div>
                            <div className='col-md-12 border border-1 rounded p-2 text-center mt-2 mb-4'>
                                <Link to='/' className='text-success text-decoration-none fs-6 fw-semibold'>Apply on Timesjobs</Link>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src={person4} alt="" />
                                    <p className='mx-4 fs-6 fw-bolder'>Ronal Jones</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <p><i className="fa-regular fa-eye"></i><span className='px-2'>1.4k views</span></p>
                                    </div>
                                    <div className='mx-4'>
                                        <button className='border-0 rounded-1 px-2 py-1'> <i className="fa-solid fa-share-nodes"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default HomeFeed;