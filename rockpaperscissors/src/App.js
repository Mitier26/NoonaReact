import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import { useState } from 'react';

//1. 박스 2개, [타이틀, 사진, 결과]
//2. 바위 가위 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템을 선택한다.
//5. 3,4의 결과를 가지도 누가 이겼는지 승부를 가린다.
//6. 승패 결과에 따라 테두리 색이 변한다.
const choice = {
    rock: {
        name: 'Rock',
        img: 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg',
    },
    scissors: {
        name: 'Scissors',
        img: 'https://t3.ftcdn.net/jpg/04/46/48/04/360_F_446480429_34T9P0xXA9rVevSQ8V4jYoZQq273IMBC.jpg',
    },
    paper: {
        name: 'Paper',
        img: 'https://m.media-amazon.com/images/I/81cBArUYQGL.jpg',
    },
};
function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState(null);

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);

        setResult(judgement(choice[userChoice], computerChoice));
    };

    const judgement = (user, computer) => {
        if (user.name == computer.name) {
            return 'tie';
        } else if (user.name == 'Rock') return computer.name == 'Scissors' ? 'win' : 'lose';
        else if (user.name == 'Scissors') return computer.name == 'Paper' ? 'win' : 'lose';
        else if (user.name == 'Paper') return computer.name == 'Rock' ? 'win' : 'lose';
    };

    const randomChoice = () => {
        let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 배열로 만든다.
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    };

    return (
        <div>
            <div className="main">
                <Box title="You" item={userSelect} result={result}></Box>
                <Box title="Computer" item={computerSelect} result={result}></Box>
            </div>

            <div class="main">
                <button onClick={() => play('scissors')}>가위</button>
                <button onClick={() => play('rock')}>바위</button>
                <button onClick={() => play('paper')}>보</button>
            </div>
        </div>
    );
}

export default App;
