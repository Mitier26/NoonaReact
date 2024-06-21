import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'


function App() {

  // 리덕스를 하기 위해 필요한것.
  // 컴포넌트, 액션, 리듀서, 스토어

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch({ type: "INCREMENT", payload: { num: 1 } });
  }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>추가</button>
    </div>
  );
}

export default App;
