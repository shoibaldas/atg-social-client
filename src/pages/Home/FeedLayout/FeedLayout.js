import React from 'react';
import HomeFeed from '../HomeFeed/HomeFeed';
import RightSideContent from '../RightSideContent/RightSideContent';

const FeedLayout = () => {
    return (
        <div className='container d-flex'>
            <div className='col-md-8'>
                <HomeFeed></HomeFeed>
            </div>
            <div className='col-md-4 mt-3 p-4 d-flex justify-content-end'>
                <RightSideContent></RightSideContent>
            </div>
        </div>
    );
};

export default FeedLayout;