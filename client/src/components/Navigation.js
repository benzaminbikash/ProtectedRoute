import React from 'react'
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className='navbar'>
            <Link className='navbar-link-item' to="/" >Home</Link>
            <Link className='navbar-link-item' to="/dashboard" >DashBoard</Link>
            <Link className='navbar-link-item' to="/auth" >Authentication</Link>
        </div>
    )
}

export default Navigation;