import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import { usePostQuery } from '../hooks/usePosts'

const ReactQueryPage = () => {

    // 커스텀 훅을 불러 오는 방법
    const {data1, isLoading1, isError1, error1, refetch1} = usePostQuery();

    const fetchPost = (queryData) => {
        const id = queryData.queryKey[1]
        return axios.get(`http://localhost:3004/posts/${id}`);
    }

    // 많은 것을 반환한다.
    const {data, isLoading, isError, error, refetch} = useQuery({
        // refetch : 버튼을 누룰 때 api 호출하기
        queryKey:['posts',1],
        // api 호출 각각의 이름을 지정할 수 있다.
        // 이름을 기준으로 데이터를 가지고 올 수 있다.
        // 리스트 안에 다른 데이터도 보낼 수 있다.
        queryFn:(queryData)=>{
            // 호출할 api
            const id = queryData.queryKey[1]
            // 쿼리 데이터 안에있는 쿼리키 안에 있는 2 번째 데이터 : 1
            return axios.get(`http://localhost:3004/posts/${id}`);

        },
        // queryFn: fetchPost //로 만들 수 있다
        retry: 1,    // 재시도 횟수 기본 3번 시도한다.
        select: (data)=>{return data.data},
        // data아래에 있는 data만 선택해서 리턴한다.
        gcTime:5000,
        // 가비지콜렉터 시간, 캐쉬를 비우는 시간! 다른 페이지에 갔을 때 캐쉬가 사라지는 시간
        staleTime: 5000,
        // 유통기한, api 호출대기 시간 같은 것이다.
        // 5초 까지는 api호출을 다시 하지 않게 된다.
        // api 호출이 많이 필요 없을 때 사용한다.
        // refetchInterval: 3000,
        // 3초 마다 fetch를 실행 한다. 별로 필요 없을 것 같다.
        // refetchOnMount : false,
        // 페이지에 다시 들어 왔을 때, 호출 할 지 안 할 지 선택한다.
        // false는 한 번만 작동 하게 된다.
        // 기본값은 true
        // refetchOnWindowFocus : true,
        // 왼도창을 다른 차에 갔다 다시 돌아 왔을 때 작동하게 한다.
        enabled : false,
        // 초기에 api를 호출 하지 않게 한다.
    })

    // 쿼리 여러개를 한번에 처리 하는 방법
    // useQueries
    const ids = [1,2,3,4];

    const fetchPosDetail = (id) => {
        return axios.get(`http://localhose:3004/${id}`)
    }

    useQueries({
        queries:ids.map((id)=>{
            return {
                queryKey:["posts", id],
                queryFn: () => fetchPosDetail(id),
                
            }
        }),
        combine: (result) =>{
            // 여러개의 쿼리를 부르면서 받은 data를 합친다.
            return {
                data: result.map((result)=>result.data),
            }
        }
    })

    console.log(data);
    console.log("error", isError, error);

    if(isLoading) {
        return <h1>Loading........</h1>
    }
    if(isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <div>
            {data?.map((item, index)=>(
            <div key={index}>{item.title}</div>
            
        ))}
        <button onClick={refetch} >post 다시</button>
        
        </div>
    )
}

export default ReactQueryPage