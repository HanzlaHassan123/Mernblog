import React from 'react'
import './sidebar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
    <div className="sideBarItems">
        <span className='sideBarTitle'>About  US </span>
        <img className='sidebarImg'
         src="https://cdn.pixabay.com/photo/2018/01/14/21/16/paper-3082623_640.jpg"
        alt="" />
        <p>Lorem ipsum dolor sit 
            amet consectetur adipisicing elit.
             Illo magni nisi laboriosam itaque labore molestias
             dicta totam eveniet consequuntur ut.</p>
     </div>


    <div className="sidebarItems">
             <span className='sideBarTitle'>Categories </span>
             <ul className="sidebarLists">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Tech</li>
             </ul>
             </div>


             <div className="sideBarItems">
             
             <div className="sidebarSocial">
             <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
             </div>
             </div>
    
    </div>
  )
}
