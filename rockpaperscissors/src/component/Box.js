import React from 'react';

const Box = (props) => {
    let result;
    if (props.title === 'Computer' && props.result !== 'tie' && props.result !== '') {
        result = props.result === 'win' ? 'lose' : 'win';
    } else {
        result = props.result;
    }

    return (
        <div class={`box ${result}`}>
            <h1>{props.title}</h1>
            <img class="item-img" src={props.item && props.item.img}></img>
            <h2>{result}</h2>
        </div>
    );
};

export default Box;
