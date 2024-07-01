import axios from 'axios'

// API 키를 암호화 하기 위해 필요한 것 .env에 있다.
const API_KEY = process.env.REACT_APP_API_KEY;

// axios
// api 연결을 편하게 만들어 주는 것
// 영화 정보를 가지고 오는 사이트의 문서에
// 아래와 같은 정보를 넣어야 한다.
const api = axios.create({
    baseURL: " https://api.themoviedb.org/3",
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
})

// 요청 인터셉터 추가하기
axios.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
}, function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
});

// 응답 인터셉터 추가하기
axios.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
}, function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
});

export default api;