import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlider from './components/PopularMovieSlider';
import TopRatedMovieSlider from './components/TopRatedMovieSlider';
import UpcomingMovieSlide from './components/UpcomingMovieSlider';
// 1. 배너 => popular movie를 들고와서 보여준다.
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
const HomePage = () => {
    return (
        <div>
            <Banner />
            <PopularMovieSlider />
            <TopRatedMovieSlider />
            <UpcomingMovieSlide />
        </div>
    );
};

export default HomePage;
