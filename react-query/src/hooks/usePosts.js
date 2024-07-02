import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPost = (postId) => {
    return axios.get(`http://localhost:3004/posts/${postId}`);
}

// 커스텀 훅을 사용하기 위해서는 export 가 필요하다.
// 보여지는 곳과 api 호출하는 것을 분리 하기 위해 만든다.
// 다른 곳에서 해당 함수를 불러오는 것 만으로도 data를 받을 수 있다.
// return 이 data니까.
export const usePostQuery = (postId) => {
    return useQuery({

        queryKey: ['posts', postId],
        queryFn: () => fetchPost(postId),
        retry: 1,
        select: (data) => { return data.data },

    })
}