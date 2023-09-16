import React from 'react'
import './home.css'

import SideBar from '../../components/sideBar/SideBar'
import Posts from '../../components/posts/Posts'
import Headerss from '../../components/Header/Headerss'

export default function Home() {
  return (
    <div className='home'>
     <Headerss/>
    <div className="homePage">
      <Posts/>
      <SideBar/>
    </div>
    </div>
  )
}
