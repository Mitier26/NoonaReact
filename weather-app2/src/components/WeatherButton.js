import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cites, setCity, selCity }) => {
    return (
        <div>
            <Button variant={`${selCity === '' ? "outline-warning" : "waring"}`} onClick={() => setCity('')}>현재위치</Button>

            {cites.map((city, index) => (
                <Button variant={city === selCity ? "outline-warning" : "warning"} key={index} onClick={() => setCity(city)}> {city} </Button>
            ))}
        </div>
    )
}

export default WeatherButton