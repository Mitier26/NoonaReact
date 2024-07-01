import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


// 페이지
// 홈 페이지 (검색)              주소 /
// 영화 전체를 보여주는 페이지    주소 /movies
// 영화 디테일 페이지             주소 /movies/:id
// 페이지를 폴더로 나누었다 이유는 각 페이지 마다 다른 스타일을 사용하기 때문

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        {/* 부모에 AppLayout를 넣었다. 이 아래에 있는 것는 기본적을 AppLayout를 가지고 만들어 진다. */}
        <Route index element={<Homepage />} />
        {/* index 는 부모의 path를 그대로 사용하겠다는 것이다. */}
        {/* <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:id" element={<MovieDetail />} /> */}
        {/* 
          연관되어 있는 Route를 모을 수 있다.
          path에 있던 / 가 사라졌다.
          혼돈이 생길 것 같다. path 가 / 을 포함 하고 있다고 생각해야 할 것 같다.
        */}
        <Route path='movies'>
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
