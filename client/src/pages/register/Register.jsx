import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label className='labelItem' >Username</label>
                <input
                    type="text"
                    className='registerInput'
                    placeholder='Enter Your Username...' />
                <label className='labelItem' >Email</label>
                <input
                    type="text"
                    className='registerInput'
                    placeholder='Enter Your Email...' />
                <label className='labelItem' >Password</label>
                <input
                    type="password"
                    className="registerInput"
                    placeholder='Enter Your Password...' />
                <button className="registerButton">Sign up</button>
            </form>
            <button className="loginBtn">
                <Link className="link" to="/login">
                    Login
                </Link>
            </button>
        </div>
    )
}
