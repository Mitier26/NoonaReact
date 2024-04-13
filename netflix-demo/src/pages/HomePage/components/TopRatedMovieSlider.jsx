import React from 'react';
import MovieSlider from '../../../common/MovieSlider/MovieSlider';
import { useTopRatedMoviesQuery } from '../../../hooks/useTopRatedMovies';
import { responsive } from '../../../constants/responsive';
import Alert from 'react-bootstrap/Alert';
import 'react-multi-carousel/lib/styles.css';

const TopRatedMovieSlider = () => {
    // 슬라이더를 만들기 위해서는 데이터가 있어야 한다. useTopRatedMovies를 만들어야 한다.

    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <div>
            <MovieSlider title="Top Rated Movies" movies={data.results} responsive={responsive} />
        </div>
    );
};

export default TopRatedMovieSlider;
