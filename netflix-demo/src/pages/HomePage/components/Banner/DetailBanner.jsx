import React, { useState } from 'react';
import './Banner.style.css';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import YouTube from 'react-youtube';
import { useMovieTrailerQuery } from '../../../../hooks/useMovieTrailer';
import Alert from 'react-bootstrap/Alert';

function MyVerticallyCenteredModal(props) {
    const opts = {
        height: '500px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const { data, isLoading, isError, error } = useMovieTrailerQuery(props.id);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header style={{ backgroundColor: 'black' }} closeButton></Modal.Header>
            <Modal.Body style={{ backgroundColor: 'black' }}>
                <YouTube videoId={data.results[0].key} opts={opts} className="youtube-frame" />
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: 'black' }}>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const DetailBanner = ({ movie }) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div
            style={{
                backgroundImage: `url("https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${movie.poster_path}")`,
            }}
            className="banner"
        >
            {/* text-white : 부트스트랩에서 제공해 주는 것 , 일반 부트스트랩 */}
            <div className="text-white banner-text-area">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <Button variant="outline-light" onClick={() => setModalShow(true)}>
                    Show Video
                </Button>
            </div>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} id={movie.id} />
        </div>
    );
};

export default DetailBanner;
