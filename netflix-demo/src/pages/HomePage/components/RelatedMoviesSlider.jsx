import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useRelatedMoviesQuery } from '../../../hooks/useRelatedMovies';
import MovieSlider from '../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../constants/responsive';

const RelatedMoviesSlider = ({ id }) => {
    const { data, isLoading, isError, error } = useRelatedMoviesQuery(id);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        <Alert variant="danger">{error.message}</Alert>;
    }

    return <MovieSlider title="Related Movies" movies={data.results} responsive={responsive} />;
};

export default RelatedMoviesSlider;
