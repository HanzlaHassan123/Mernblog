import React from 'react'
import './settings.css'
import SideBar from '../../components/sideBar/SideBar'
export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Your account
                    </span>
                </div>
                <form className="settingsForm">
                    <label >Profile Picture </label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                         className='PPimg'
                        />
                        <label className='addPP' htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user-pen"></i>
                            <input type="file" id='fileInput' style={{ display: "none" }}
                            />
                        </label>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder='Hero' />
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Hero@gmail.com' />
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    <button className="settingsUpdate">
                       Update 
                    </button>
                </form>
            </div>
            <SideBar />

        </div>
    )
}
