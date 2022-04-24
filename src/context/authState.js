import React, {useState} from 'react'
import authContext from './authContext'

const AuthState = (props) => {
    const initialState = localStorage.getItem('token') !== null
    const [loginState, setLoginState] = useState(initialState)

    const loginUser = async (loginInfo, history) => {
        //API call for logging in the user
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInfo)
        });
        const json = await response.json()
        if(json.success){
            localStorage.setItem('token', json.jwtAuthToken)
            setLoginState(true)
            history("/Home")
            console.log(json)
        }
        else{
            console.clear()
        }
        // setNotes(json)
    }

    const logoutUser = (history) => {
        localStorage.removeItem('token')
        setLoginState(false)
        history.push('/login')
    }

    return (
        <authContext.Provider value={{ loginState, logoutUser, loginUser }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState