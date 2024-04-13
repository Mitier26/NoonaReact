import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({ movie }) => {
    // data의 이름을 재정의 한다.
    const { data: genreData } = useMovieGenreQuery();

    const showGenre = (genreIdList) => {
        if (!genreData) return [];

        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);
            return genreObj.name;
        });

        return genreNameList;
    };

    return (
        <div
            style={{ backgroundImage: `url("https://www.themoviedb.org/t/p/w1280${movie.poster_path}")` }}
            className="movie-card"
        >
            <div className="overlay">
                <h1>{movie.title}</h1>
                {showGenre(movie.genre_ids).map((id, index) => (
                    <Badge bg="danger" key={index}>
                        {id}
                    </Badge>
                ))}
                <div>
                    <div>{movie.vote_average}</div>
                    <div>{movie.popularity}</div>
                    <div>{movie.adult ? 'over 18' : 'under 18'}</div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
