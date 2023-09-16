import React from 'react'
import './posts.css'
import SinglePost from './singlePost/SinglePost'

export default function Posts() {
  return (
    <div className='posts'>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
    </div>
  )
}
