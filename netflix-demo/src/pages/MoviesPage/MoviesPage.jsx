import React, { useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import { DropdownMenu } from './components/DropdownMenu';

// 경로 2가지
// nav바에서 클릭해서 접속 :  popular 보여줌
// keyword를 입력해서 접속 : keyword에 관련된 영화를 보여줌
const MoviesPage = () => {
    // url 의 쿼리를 가지고 온다.
    const [query, setQuery] = useSearchParams();
    const keyword = query.get('q');
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });

    const handlePageClick = ({ selected }) => {
        // selected 를 반환한다.
        setPage(selected + 1);
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <Container>
            <Row>
                <Col lg={2} xs={12}>
                    <DropdownMenu />
                </Col>
                <Col lg={8} xs={12}>
                    <Row>
                        {data?.results.map((movie, index) => (
                            <Col key={index} lg={4} xs={12}>
                                <MovieCard movie={movie} />
                            </Col>
                        ))}
                    </Row>
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={data?.total_pages}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                        forcePage={page - 1}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default MoviesPage;
