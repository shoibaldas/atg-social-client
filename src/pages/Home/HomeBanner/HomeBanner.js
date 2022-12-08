import React from 'react';
import banner from '../../../assets/homebanner/Rectangle 2.png';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='position-relative'>
            <div className='img-container'>
                <img src={banner} className="img-fluid" alt="..."></img>
            </div>
            <div className='position-absolute d-none d-md-block' style={{ left: '7rem', bottom: '5rem' }}>
                <h3 className='fs-2 fw-bold text-white'>Computer Engineering</h3>
                <h5 className='fs-6 fw-lighter text-white'>142,765 Computer Engineers follow this</h5>
            </div>
            <div className='position-absolute d-block d-md-none d-lg-none d-xl-none d-xxl-none' style={{ right: '1rem', top: '1rem' }}>
                <button type="button" className="border border-1 bg-transparent text-white p-2 rounded fw-semibold">Join Group</button>
            </div>
        </div >
    );
};

export default HomeBanner;