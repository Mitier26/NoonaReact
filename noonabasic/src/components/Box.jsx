import React from 'react';

const Box = (props) => {
    return (
        <div className="box">
            {props.title}
            <p>{props.body}</p>
            <h2>{props.num}</h2>
        </div>
    );
};

export default Box;
