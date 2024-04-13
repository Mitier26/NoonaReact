import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieTrailer = (queryData) => {
    const id = queryData.queryKey[1];
    return api.get(`/movie/${id}/videos`);
};

export const useMovieTrailerQuery = (id) => {
    return useQuery({
        queryKey: ['movie-trailer', id],
        queryFn: fetchMovieTrailer,
        select: (result) => result.data,
    });
};
