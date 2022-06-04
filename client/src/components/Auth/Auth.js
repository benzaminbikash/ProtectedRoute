import React from 'react'

export const fakeLogin = () => {
    return (sessionStorage.getItem("login") === "true" ? true : false)
}
const Auth = () => {

    const logindata = () => {
        sessionStorage.setItem("login", true)
        alert("login successfull")
    }
    const logoutdata = () => {
        sessionStorage.setItem("login", false)
        alert("logout successfull")
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={logindata}>LogIn</button>
            <button onClick={logoutdata}>LogOut</button>

        </div>
    )
}

export default Auth