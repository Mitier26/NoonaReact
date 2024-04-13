import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 필수로 설치해주는 것이 있다.
// 리액트 부트스트랩, 부트스트랩
// 리액트 돔, 리액트 라우터 돔
// axios
// 리액트 쿼리
const root = ReactDOM.createRoot(document.getElementById('root'));

// 리액트 쿼리를 사용하기 위한 필수!!
const queryClient = new QueryClient();
root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
