import React from 'react'
import Button from './Button'

const Home = () => {
    return (
        <div className="home-wrapper">
            <h1> Hey there! :) </h1>
            <h1> Please Click the link below to start your test.</h1>
            <Button
                to="/quiz"
                text="Enter Test"
            />
        </div>
    )
}

export default Home;