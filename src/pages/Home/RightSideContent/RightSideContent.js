import React from 'react';
import { GoLocation } from "react-icons/go";
import { RiPencilFill, RiErrorWarningLine } from "react-icons/ri";

const RightSideContent = () => {
    return (
        <div className='col-md-10'>
            <div className='d-flex justify-content-between border-bottom border-1 py-2'>

                <div className='d-flex \' >
                    <p className='' style={{ margin: '0' }}><GoLocation className='fs-4' ></GoLocation><span className='fs-6 fw-semibold mx-2'>Noida, India</span></p>
                </div>

                <RiPencilFill className='fs-4'></RiPencilFill>


            </div>
            <div className='mt-4 d-flex' style={{ color: '#5C5C5C' }}>
                <div className='d-flex align-items-stretch'>
                    <RiErrorWarningLine className='fs-5' ></RiErrorWarningLine>
                </div>
                <p className='mx-1' style={{ fontSize: '.8rem', wordWrap: 'break-word' }}> Your location will help us serve better and extend a personalised experience.</p>
            </div>
        </div >

    );
};

export default RightSideContent;