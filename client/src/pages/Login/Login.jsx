import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label className='labelItem' >Email</label>
                <input type="text" placeholder='Enter Your Email...' />
                <label className='labelItem' >Password</label>
                <input type="password" placeholder='Enter Your Password...' />
                <button className="loginButton">Login</button>
            </form>
            <button className="registerBtn">
                <Link className="link" to="/register">
                    Register
                </Link>
            </button>
        </div>
    )
}
