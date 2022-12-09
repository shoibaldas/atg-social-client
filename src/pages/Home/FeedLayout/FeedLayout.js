import React from 'react';
import HomeFeed from '../HomeFeed/HomeFeed';
import RightSideContent from '../RightSideContent/RightSideContent';
import { ImPencil } from "react-icons/im";

const FeedLayout = () => {
    return (
        <div className='position-relative container d-flex' style={{ padding: '0' }}>
            <div className='col-md-8'>
                <HomeFeed></HomeFeed>
            </div>
            <div className='col-md-4 mt-3 p-4 d-none d-md-block '>
                <div className='d-flex justify-content-end'>
                    <RightSideContent></RightSideContent>
                </div>
            </div>
            <button className='position-fixed d-block d-md-none border-0 d-lg-none d-xl-none d-xxl-none' style={{ backgroundColor: '#FF5C5C', right: '1.5rem', bottom: '1rem', width: '3.5rem', height: '3.5rem', borderRadius: '50%' }}>
                <ImPencil className='fs-3 text-white'></ImPencil>
            </button>
        </div>
    );
};

export default FeedLayout;