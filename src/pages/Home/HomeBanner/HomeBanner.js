import React from 'react';
import banner from '../../../assets/homebanner/Rectangle 2.png';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='position-relative'>
            <div className='img-container'>
                <img src={banner} className="img-fluid" alt="..."></img>
            </div>
            <div className='position-absolute' style={{ left: '12rem', bottom: '5rem' }}>
                <h3 className='fs-3 fw-bold text-white'>Computer Engineering</h3>
                <h5 className='fs-6 fw-lighter text-white'>142,765 Computer Engineers follow this</h5>
            </div>
        </div >
    );
};

export default HomeBanner;