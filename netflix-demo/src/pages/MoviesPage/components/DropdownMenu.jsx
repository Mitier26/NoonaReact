import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useMovieGenreQuery } from '../../../hooks/useMovieGenre';

export const DropdownMenu = () => {
    const { data, isLoading, isError, error } = useMovieGenreQuery();

    return (
        <div>
            <Dropdown className="mb-3">
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    인기도 정렬
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>인기 많은순</Dropdown.Item>
                    <Dropdown.Item>인기 적은순</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    장르별 검색
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {data?.map((item, index) => (
                        <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
