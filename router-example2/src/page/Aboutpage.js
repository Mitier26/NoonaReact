import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {

    const navigate = useNavigate();

    const goToHomepage = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>About Page</h1>
            <button onClick={goToHomepage}>Go To Home</button>
        </div>
    )
}

export default Aboutpage