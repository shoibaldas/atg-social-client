import React from 'react';
import HomeFeed from '../HomeFeed/HomeFeed';
import RightSideContent from '../RightSideContent/RightSideContent';

const FeedLayout = () => {
    return (
        <div>
            <div className='col-md-8'>
                <HomeFeed></HomeFeed>
            </div>
            <div className='col-md-4'>
                <RightSideContent></RightSideContent>
            </div>
        </div>
    );
};

export default FeedLayout;