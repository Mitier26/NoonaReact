import logo from './logo.svg';
import './App.css';
import Box from "./components/Box"
import { useState } from 'react';

function App() {
    
    const [userSelect, setUserSelect] = useState(null);
    const [comSelect, setComSelect] = useState(null);
    const [result, setResult] = useState('');

    const choice = {
        rock: {
            name: "Rock",
            img : "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
        },
        scissors: {
            name: "Scissors",
            img: "https://cdn.images.fecom-media.com/FE00015871/images/Classmates_School_Scissors__Right_Handed__Pack_of_121426638_e8uXEwmmiE.jpg?width=578&height=578&scale=UpscaleCanvas&anchor=MiddleCenter"
        },
        paper:{
            name: 'Paper',
            img: "https://5.imimg.com/data5/HC/KF/HZ/SELLER-4619430/white-art-paper.jpg"
        }
    }

    const play = (userChoice) => {
        // console.log("선택:",userChoice);
        // console.log('무억을 선택?',choice[userChoice]);
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComSelect(computerChoice);
        setResult(judgement(choice[userChoice], computerChoice));
    }

    const judgement = (user, computer) => {
        if(user.name == computer.name) return 'tie';
        else if (user.name == 'Rock') return computer.name == 'Scissors' ? "win" : "lose";
        else if (user.name == 'Scissors') return computer.name == "Paper" ? "win" : "lose";
        else if (user.name == 'Paper') return computer.name == "Rock" ? "win" : "lose";
    }

    const randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    }

    return (
        <div>
            <div className='main'>
                <Box title='You' item={userSelect} result={result}></Box>
                <Box title='Computer' item={comSelect} result={result}></Box>
            </div>

            <div className='main'>
                <button onClick={()=>play("scissors")}>가위</button>
                <button onClick={()=>play("rock")}>바위</button>
                <button onClick={()=>play("paper")}>보</button>
            </div>
        </div>
        
    );
}

export default App;
