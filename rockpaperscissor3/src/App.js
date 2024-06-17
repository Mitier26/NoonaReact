import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import { useState } from 'react';

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbhwALIbOA4_3UN6AbsbwDjNwSgggmJWlUQ&s"
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn11.bigcommerce.com/s-500kvdqtx6/images/stencil/1400x1400/products/452/2166/7inch-open__95243.1715917553.png?c=1"
  },
  paper: {
    name: "Paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"
  },
}

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {

    if (user.name === computer.name) return "tie";
    else if (user.name === "Rock") return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors") return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper") return computer.name === "Rock" ? "Win" : "Lose";
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // 키를 이용해 Array를 만든다.
    // 키는 가장 처음 나오는 rock: 이다.
    // 키 : 오브젝트
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className='main' >
        <Box title='You' item={userSelect} result={result} />
        <Box title='Computer' item={computerSelect} result={result} />
      </div>

      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>

  );
}

export default App;
