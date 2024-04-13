import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchUpcomingMovies = () => {
    // return api.get('https://api.themoviedb.org/3/movie/popular');
    // 이것이 기본주소이지만 api 세팅에서 기본값을 정했지 때문에 간결하게 사용할 수 있다.
    return api.get('/movie/popular');
};

export const useUpcomingMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchUpcomingMovies,
        // result는 받아오는 데이터의 임의 이름
        select: (result) => result.data,
    });
};
