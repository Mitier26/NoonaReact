import React from 'react'

const Box = (props) => {
    console.log("박스내부 props:",props);
    // console.log("박스내부 item:",props.item);
    return (
        <div className='box'>
            <h1>{props.title}</h1>
            <img src={props.item && props.item.img}></img>
            <h2>{props.result}</h2>
        </div>
    )
}

export default Box