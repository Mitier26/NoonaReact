import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';

const Banner = () => {
    // useQuery는 data를 반환한다.
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        <h1>Loading....</h1>;
    }
    if (isError) {
        <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <div
            style={{
                backgroundImage: `url("https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}")`,
            }}
            className="banner"
        >
            {/* text-white : 부트스트랩에서 제공해 주는 것 , 일반 부트스트랩 */}
            <div className="text-white banner-text-area">
                <h1>{data?.results[0].title}</h1>
                <p>{data?.results[0].overview}</p>
            </div>
        </div>
    );
};

export default Banner;
