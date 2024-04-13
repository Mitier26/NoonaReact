import React from 'react';
import './MovieSlider.style.css';
import Carousel from 'react-multi-carousel';
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({ title, movies, responsive }) => {
    return (
        <div>
            <h3>{title}</h3>
            <Carousel
                infinite={true}
                centerMode={false}
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive}
                sliderClass="sliderClass"
            >
                {movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel>
        </div>
    );
};

export default MovieSlider;
