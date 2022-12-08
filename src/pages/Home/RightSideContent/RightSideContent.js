import React from 'react';
import { GoLocation } from "react-icons/go";
import { RiPencilFill, RiErrorWarningLine } from "react-icons/ri";

const RightSideContent = () => {
    return (
        <div className='col-md-10'>
            <div className='d-flex border-bottom border-1'>
                <p className='mx-4'><GoLocation className='fs-4'></GoLocation><span className='fs-6 fw-semibold mx-2'>Noida, India</span> <span className='mx-4'><RiPencilFill className='fs-4'></RiPencilFill></span></p>
            </div>
            <div className='mt-4 d-flex '>
                <RiErrorWarningLine className='fs-3'></RiErrorWarningLine>
                <p className='mx-2'>Your location will help us serve better and extend a personalised experience.</p>
            </div>
        </div>
    );
};

export default RightSideContent;