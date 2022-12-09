import React, { useContext } from 'react';
import banner from '../../../assets/homebanner/Rectangle 2.png';
import { StateContext } from '../../../context/StateProvider';
import './HomeBanner.css'

const HomeBanner = () => {
    const { loggedIn } = useContext(StateContext);
    return (
        <div className='position-relative'>
            <div className='img-container'>
                <img src={banner} className="img-fluid" alt="..."></img>
            </div>
            <div className='position-absolute' style={{ left: '7.5rem', bottom: '3rem' }}>
                <h3 className='text-white .red' style={{ fontSize: '3vw' }}>Computer Engineering</h3>
                <h5 className='fw-lighter text-white' style={{ fontSize: '1.5vw' }}>142,765 Computer Engineers follow this</h5>
            </div>
            <div className='position-absolute d-block d-md-none d-lg-none d-xl-none d-xxl-none' style={{ right: '1rem', top: '1rem' }}>
                {
                    loggedIn ?
                        <button type="button" className="border border-1 bg-transparent text-white p-2 rounded " style={{ fontSize: '2.5vw' }}>Leave Group</button>
                        :
                        <button type="button" className="border border-1 bg-transparent text-white p-2 rounded" style={{ fontSize: '2.5vw' }}> Join Group</button>
                }
            </div>
        </div >
    );
};

export default HomeBanner;