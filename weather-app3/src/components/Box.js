import React from 'react'

const Box = ({ weatherData }) => {
    return (
        <div>
            <div>{weatherData?.name}</div>
            <h2>{weatherData?.main.temp}도</h2>
            <h3>{weatherData?.weather[0].main}</h3>
        </div>
    )
}

export default Box