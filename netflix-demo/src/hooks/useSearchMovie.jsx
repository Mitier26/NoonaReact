import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchMovie = ({ keyword, page }) => {
    return keyword ? api.get(`/search/movie?query=${keyword}&page=${page}`) : api.get(`/movie/popular?page=${page}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
    return useQuery({
        // 페이지 마다 다를 때 객체로 만들어 준다.
        queryKey: ['movie-search', { keyword, page }],
        queryFn: () => fetchSearchMovie({ keyword, page }),
        select: (result) => result.data,
    });
};
