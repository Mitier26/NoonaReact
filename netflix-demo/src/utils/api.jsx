import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

// 같은 주소를 매번 입력해야하는 번거러움을 제거한다.
// create 로 사용자 정의를 만들 수 있다.
const api = axios.create({
    // 기본값으로 입력 해야하는 것이다.
    // 기본 주소와 헤더에 관한 것은
    // 영화 api 사이트에 있다.
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: ' application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
});

// 요청 인터셉터 추가하기
axios.interceptors.request.use(
    function (config) {
        // 요청이 전달되기 전에 작업 수행
        return config;
    },
    function (error) {
        // 요청 오류가 있는 작업 수행
        return Promise.reject(error);
    }
);

// 응답 인터셉터 추가하기
axios.interceptors.response.use(
    function (response) {
        // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
        // 응답 데이터가 있는 작업 수행
        return response;
    },
    function (error) {
        // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
        // 응답 오류가 있는 작업 수행
        return Promise.reject(error);
    }
);

export default api;
