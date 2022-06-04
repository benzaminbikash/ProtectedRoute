import React from 'react'
import image1 from "../assets/1.jpg"
import image2 from "../assets/2.jpg"
import image3 from "../assets/3.jpg"

const Dashboard = () => {
    return (
        <div className='container'>
            <div className='main'>
                <img src={image1} alt="randomImage" />
                <img src={image2} alt="randomImage" />
                <img src={image3} alt="randomImage" />

            </div>
        </div>
    )
}

export default Dashboard