import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import { useState } from 'react';

// 1. 유저가 버튼을 선택하면 박스 안에 내용이 변경된다.
// 2. 유저가 선택한 것이 무엇인지 Box가 알아야 한다.
// 3. 선택한 것을 Box에 전달 해야 한다.

const choice = {
    rock: {
        name: 'Rock',
        icon: '👊',
    },
    scissors: {
        name: 'Scissors',
        icon: '✌',
    },
    paper: {
        name: 'Paper',
        icon: '🖐',
    },
};

function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState('');
    const [userWins, setUserWins] = useState(0);
    const [computerWins, setComputerWins] = useState(0);

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComputerSelect(choice[computerChoice]); // <-- 아래 것 때문에 변수로 변경

        // 유저가 이겼는지 컴퓨터가 이겼는지 확인해야 한다.
        // 그러면 유저가 선택한 것과 컴퓨터가 선택한 것을 알아야한다.
        // userChoice는 들어 오는데 컴퓨터 선택이 없다!!!
        // 컴퓨터 선택을 변수로 빼야한다
        // 그런데 우리는 문자만 있어도 비교 할 수 있기 때문에
        // 객체를 비교할 필요가 없다.

        setResult(judgement(userChoice, computerChoice));
    };

    const judgement = (user, computer) => {
        // user와 computer의 타입이 다르다 타입을 통일 해 준다.
        if (user === computer) return '비김';

        const winConditions = {
            scissors: 'paper',
            rock: 'scissors',
            paper: 'rock',
        };

        if (winConditions[user] === computer) {
            setUserWins((userWins) => userWins + 1);
            return '승리';
        } else {
            setComputerWins((computerWins) => computerWins + 1);
            return '패배';
        }
    };

    const randomChoice = () => {
        // 랜덤으로 선택하기 위해서는 배열!!
        // 객체를 배열로 만드는 방법
        // Object.Keys(객체)
        // 객체의 키를 가지고 배열을 만든다.
        const list = Object.keys(choice);
        // 랜덤은 아이템을 추출한다.
        // const final = choice[list[Math.floor(Math.random() * list.length)]];
        const final = list[Math.floor(Math.random() * list.length)];
        return final;
    };

    return (
        <div className="container">
            <div className="main">
                <div className="score">
                    <span>Player</span> <span>{userWins}</span> : <span>{computerWins}</span> <span>Computer</span>
                </div>

                <div className="boxes">
                    <Box title="Player" item={userSelect} result={result} />
                    <Box title="Computer" item={computerSelect} result={result} />
                </div>

                <div className="buttons">
                    <button onClick={() => play('rock')}>👊</button>
                    <button onClick={() => play('scissors')}>✌</button>
                    <button onClick={() => play('paper')}>🖐</button>
                </div>
            </div>
            <div className="back"></div>
        </div>
    );
}

export default App;
