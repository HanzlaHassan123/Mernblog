import React from 'react'
import SideBar from '../../components/sideBar/SideBar'
import DetailedPost from '../detailedPost/DetailedPost'
import './fullpost.css'


export default function FullPost() {
  return (
    <div className='fullposts'>
        <DetailedPost/>
        <SideBar/>
    </div>
  )
}
