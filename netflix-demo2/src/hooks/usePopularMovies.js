import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

// 기본 URL 주소
// https://api.themoviedb.org/3/movie/popular
// 앞에 있는 것은 기본 주소로 등록되어 있다.

const fetchPopularMovies = () => {
    return api.get('/movie/popular')
};

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularMovies,
        select: (result) => result.data,
    })
};