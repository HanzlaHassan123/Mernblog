import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom';
export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
            </div>
            <div className="topCenter">
                <div className="topList">

                    <div className="topListItem">
                        <Link className='link' to="/">Home</Link>
                    </div>
                    <div className="topListItem">
                        <Link className='link' to='/'>About</Link>
                    </div>
                    <div className="topListItem">
                        <Link className='link' to='/'>Contact</Link>
                    </div>
                    <div className="topListItem">
                        <Link className='link' to='/write'>Write</Link>
                    </div>
                    <div className="topListItem">
                        {user && "Logout"}
                    </div>

                </div>
            </div>
            <div className="topRight">
                {user ? (
                    <img
                        className='topImg'
                        src="https://images.pexels.com/photos/18129473/pexels-photo-18129473/free-photo-of-a-group-of-women-posing-on-a-grass-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                ) : (
                    <>
                        <div className="topList">
                            <div className="topListItem">
                                <Link className='link' to='/login'>Login</Link>
                            </div>
                            <div className="topListItem">
                                <Link className='link' to='/register'>Register</Link>
                            </div>
                        </div>

                    </>

                )}

                <i className="topSearchIcon  fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}