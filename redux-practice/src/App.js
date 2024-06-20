import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './components/Box';


function App() {

  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } })
  }

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "me", password: "111" } });
  }

  return (
    <div >
      <h3>{id},{password}</h3>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>로그인</button>
      <Box />
    </div>
  );
}

export default App;
