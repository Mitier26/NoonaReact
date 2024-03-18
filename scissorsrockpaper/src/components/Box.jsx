import React from 'react';

const Box = (props) => {
    let result = props.result;

    if (props.title === 'Computer' && result != '비김' && result != '') {
        result = props.result === '승리' ? '패배' : '승리';
    }

    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <p className="icons">{props.item && props.item.icon}</p>
            <h3>{result}</h3>
        </div>
    );
};

export default Box;
