import React from 'react';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import 'react-multi-carousel/lib/styles.css';
import DetailBanner from '../HomePage/components/Banner/DetailBanner';
import { Col, Container, Row, Badge, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieDetailPage.style.css';
import imdb from '../../imdb.png';
import peopple from '../../people4.png';
import RelatedMoviesSlider from '../HomePage/components/RelatedMoviesSlider';
import Reviews from '../HomePage/components/Reviews';

const MovieDetailPage = () => {
    const param = useParams();
    const { id } = param;
    const { data, isLoading, isError, error } = useMovieDetailQuery(id);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <div>
            <DetailBanner movie={data?.data} />
            <Container>
                <Row>
                    <Col lg={6} xs={12}>
                        <img
                            className="w-100 poster"
                            src={`https://themoviedb.org/t/p/w1280${data?.data.poster_path}`}
                        />
                    </Col>
                    <Col lg={6} xs={12} className="d-flex flex-column justify-content-between">
                        <div>
                            {data?.data.genres.map((genre, index) => (
                                <Badge className="m-2 fs-6" bg="danger" key={index}>
                                    {genre.name}
                                </Badge>
                            ))}
                        </div>
                        <h1>{data?.data.title}</h1>
                        <h4 className="pb-3 mb-3 border-bottom border-danger border-3">{data?.data.tagline}</h4>
                        <div className="pb-3 mb-3 border-bottom border-danger border-3">
                            <span>
                                <img className="me-1" src={imdb} width={25} />
                                {data?.data.vote_average.toFixed(1)}
                            </span>
                            <span>
                                <img className=" ms-2 me-1" src={peopple} width={25} />
                                {data?.data.popularity}
                            </span>
                            <span className="ms-2 bg-warning rounded-circle p-1 text-black">
                                {data?.data.adult ? 'adult' : 'All'}
                            </span>
                        </div>
                        <div className="pb-3 mb-3 border-bottom border-danger border-3">{data?.data.overview}</div>
                        <div>
                            <Badge bg="danger" className="badge">
                                Budget
                            </Badge>
                            ${data?.data.budget.toLocaleString()}
                        </div>
                        <div>
                            <Badge bg="danger" className="badge">
                                Revenue
                            </Badge>
                            ${data?.data.revenue.toLocaleString()}
                        </div>
                        <div>
                            <Badge bg="danger" className="badge">
                                Release Date
                            </Badge>
                            {data?.data.release_date}
                        </div>
                        <div>
                            <Badge bg="danger" className="badge">
                                Run time
                            </Badge>
                            {data?.data.runtime}분
                        </div>
                    </Col>
                </Row>
                <RelatedMoviesSlider id={id} />
                <Reviews id={id} />
            </Container>
        </div>
    );
};

export default MovieDetailPage;
