import React from 'react'
import './Login.css'
import {loginUrl} from '../spotify'

function Login() {
    return (
        <div className="login">
            <img src="https://img.icons8.com/nolan/400/spotify.png"/>
            <h1>Spotify</h1>
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login
