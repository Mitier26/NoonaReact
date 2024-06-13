import React from 'react'

const Box = ({ name, result, selected }) => {
    return (
        <div className={`box ${result}`}>
            <h2>{name}</h2>
            <h3>{selected}</h3>
            <h3>{result}</h3>
        </div>
    )
}

export default Box