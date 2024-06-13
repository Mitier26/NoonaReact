import React from 'react'

const Box = (props) => {
    console.log(props.name);
    return (
        <div className='box'>Box{props.num}
            <p>{props.name}</p>
        </div>
    )
}

export default Box