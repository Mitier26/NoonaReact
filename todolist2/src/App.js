import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoBoard from './components/TodoBoard';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const addItem = () => {
        setTodoList([...todoList, inputValue]);
    };

    return (
        <main>
            <input
                value={inputValue}
                type="text"
                onChange={(event) => {
                    setInputValue(event.target.value);
                }}
            ></input>
            <button onClick={addItem}>추가</button>
            <TodoBoard todoList={todoList} />
        </main>
    );
}

export default App;
