import React, { useState } from 'react';

const Clicker = () => {
    const [count, setCount] = useState(0);

    const ccc = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={ccc}>클릭!</button>
        </div>
    );
};

export default Clicker;
