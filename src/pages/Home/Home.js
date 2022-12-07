import React from 'react';
import FeedLayout from './FeedLayout/FeedLayout';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeMenuBar from './HomeMenuBar/HomeMenuBar';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeMenuBar></HomeMenuBar>
            <FeedLayout></FeedLayout>
        </div>
    );
};

export default Home;