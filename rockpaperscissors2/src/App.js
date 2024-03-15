import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import { useState } from 'react';

const choice = {
    rock: {
        name: 'Rock',
        img: 'https://cdn-icons-png.flaticon.com/512/5853/5853550.png',
    },
    scissors: {
        name: 'Scissors',
        img: 'https://cdn-icons-png.flaticon.com/512/6491/6491000.png',
    },
    paper: {
        name: 'Paper',
        img: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
    },
};

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
        if (user.name === computer.name) {
            return 'Tie';
        } else if (user.name == 'Rock') return computer.name == 'Scissors' ? 'Win' : 'Lose';
        else if (user.name == 'Scissors') return computer.name == 'Paper' ? 'Win' : 'Lose';
        else if (user.name == 'Paper') return computer.name == 'Rock' ? 'Win' : 'Lose';
    };

    const randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    };

    return (
        <>
            <div className="main">
                <Box title="You" item={userSelect} result={result} />
                <Box title="Computer" item={computerSelect} result={result} />
            </div>
            <div className="main">
                <button onClick={() => play('scissors')}>가위</button>
                <button onClick={() => play('rock')}>바위</button>
                <button onClick={() => play('paper')}>보</button>
            </div>
        </>
    );
}

export default App;
