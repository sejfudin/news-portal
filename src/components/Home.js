import React from 'react';
import LandingPage from './LandingPage';
import LoadMoreButton from './LoadMoreButton';
import Search from './Search';

const Home = () => {

    return (
        <>
            <Search />
            <LandingPage />
            <LoadMoreButton />
        </>
    )
}

export default Home