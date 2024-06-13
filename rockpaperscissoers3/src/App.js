import { useState } from 'react';
import './App.css';
import Box from './components/Box';

const RPS = ['묵', '찌', '빠'];

function App() {
  const [playerResult, setPlayerResult] = useState('');
  const [computerResult, setComputerResult] = useState('');
  const [playerSelected, setPlayerSelected] = useState('');
  const [computerSelected, setComputerSelected] = useState('');

  const play = (sel) => {
    const com = computerSelect();

    setPlayerSelected(RPS[sel]);
    setComputerSelected(RPS[com]);

    if (sel === com) {
      setPlayerResult("비김");
      setComputerResult("비김");
    } else if (
      (sel === 0 && com === 1) || // 묵 vs 찌
      (sel === 1 && com === 2) || // 찌 vs 빠
      (sel === 2 && com === 0)    // 빠 vs 묵
    ) {
      setPlayerResult("이김");
      setComputerResult("짐");
    } else {
      setPlayerResult("짐");
      setComputerResult("이김");
    }
  }

  const computerSelect = () => {
    return Math.floor(Math.random() * 3);
  }

  return (
    <div className="app">
      <div className="results">
        <Box name="Player" result={playerResult} selected={playerSelected} />
        <Box name="Computer" result={computerResult} selected={computerSelected} />
      </div>
      <div className="buttons">
        {RPS.map((item, index) => (
          <button key={item} onClick={() => play(index)}>{item}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
