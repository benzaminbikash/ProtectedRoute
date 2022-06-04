import React from 'react'
import { fakeLogin } from './Auth'
import { Outlet, Navigate } from 'react-router-dom'

const Protected = () => {
    const loggined = fakeLogin();
    return (loggined ? <Outlet /> : <Navigate to="/auth" />)
}

export default Protected