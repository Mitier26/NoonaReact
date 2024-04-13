import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useMovieReviewQuery } from '../../../hooks/useMovieReview';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reviews = ({ id }) => {
    const { data, isLoading, isError, error } = useMovieReviewQuery(id);
    const [showAll, setShowAll] = useState(false);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        <Alert variant="danger">{error.message}</Alert>;
    }

    const toggleShowAll = () => {
        setShowAll((prev) => !prev);
    };

    const maxLength = 300;

    return (
        <div>
            <h2 className="mb-3">Reviews</h2>
            <div>
                {data.results.map((review, index) => (
                    <div className="border p-3 mb-3  border-danger border-3 rounded-3" key={index}>
                        <h4>{review.author}</h4>
                        {showAll ? (
                            <div>
                                <div>{review.content}</div>
                                <button className="btn btn-link text-white" onClick={toggleShowAll}>
                                    접기
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div>{review.content.slice(0, maxLength)}</div>
                                {review.content.length > maxLength && (
                                    <button className="btn btn-link text-white" onClick={toggleShowAll}>
                                        더 보기
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
