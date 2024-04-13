import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// 화면에 따라 다른 navbar를 보여주기 위해 applayout도 라우터로 만든다.
// / 경로에 들어 가면 작동한다.

// 페이지의 종류
// 홈페이지     /
// 영화 전체를 보여주는 페이지 (서치)  /movies?q=
// 영화 디테일 페이지 /movies/:id

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                {/* 여기 사이에 있는 페이지의 경우 AppLayout을 기본적으로 가지고 있게 된다. */}

                {/* index : 부모의 주소를 사용할 때 사용한다. index = path="/" 와 같다  */}
                <Route index element={<HomePage />} />

                <Route path="movies">
                    <Route index element={<MoviesPage />} />
                    <Route path=":id" element={<MovieDetailPage />} />
                </Route>

                {/* 위에 있는 것과 아래있는 것은 같은 것이다.
                movies가 반복되는 것을 하나로 묶어 만들었다.
                index 는 부모를 사용한다는 것이니 movies 를 나타낸다.

                HomePage 는 주소가 / 일 때
                디테일은 /movies/:id 일 때 이다.

                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<MovieDetailPage />} /> 
                */}
            </Route>

            {/* 위에 것 외 페이지에 접속할 때 나오는 페이지를 만들 수 있다. */}
            <Route path="*" element={<NotFoundPage />} />
            {/* 주소에 따라 다른 것을 보여주는 것에 사용할 수 있다. */}
            {/* <Route path="/admin" element={<AppLayout/>}></Route> */}
        </Routes>
    );
}

export default App;
