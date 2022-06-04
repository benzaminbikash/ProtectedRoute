import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import "./App.css"
import Dashboard from './components/Dashboard'
import Auth from './components/Auth/Auth'
import Protected from './components/Auth/Protected'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>

                    <Route element={<Protected />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                    </Route>
                    <Route path='/auth' element={<Auth />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App