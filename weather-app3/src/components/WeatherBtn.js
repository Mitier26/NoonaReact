import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherBtn = ({ locations, setCity, selCity }) => {
    return (
        <div>
            <Button variant={selCity === "" ? 'outline-warning' : 'warning'} onClick={() => setCity('')}>current</Button>
            {locations.map((item, index) => (
                <Button key={index} variant={selCity === item ? 'outline-warning' : 'warning'} onClick={() => setCity(item)}>{item}</Button>
            ))}
        </div>
    )
}

export default WeatherBtn