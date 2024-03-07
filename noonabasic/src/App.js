import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import Clicker from './components/Clicker';
import { useState } from 'react';

function App() {
    let counter = 0;
    const [counter2, setCounter2] = useState(0);
    const increase = () => {
        counter = counter + 1;
        setCounter2(counter2 + 1);
    };
    return (
        <div>
            <Box title="Box1" body="몰캉" num={1}></Box>
            {/* <Box title="Box2" body="말캉" num={2}></Box>
            <Box title="Box3" body="톨캉" num={3}></Box> */}
            <Clicker></Clicker>

            <div>{counter}</div>
            <div>state:{counter2}</div>
            <button onClick={increase}>클릭!</button>
        </div>
    );
}

export default App;
