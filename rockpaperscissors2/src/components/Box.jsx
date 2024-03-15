import React from 'react';

// 유저와 컴퓨터의 결과를 보여주기 위해서는
// 해당 박스가 누구의 박스 인지 알아야 한다.
// props.title 에 You, Computer 가 들어 온다.

const Box = (props) => {
    let result = props.result;

    if (props.title === 'Computer' && result !== 'Tie' && result !== '') {
        result = props.result === 'Win' ? 'Lose' : 'Win';
    }

    return (
        // 스타일을 주기 위해서는 class에 추가해야 한다.
        <div className={`box ${result}`}>
            <h2>{props.title}</h2>
            <img className="item-img" src={props.item && props.item.img}></img>
            <p>{result}</p>
        </div>
    );
};

export default Box;
