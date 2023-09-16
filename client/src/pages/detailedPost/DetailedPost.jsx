import React from 'react'
import './detailedpost.css'
export default function DetailedPost() {
    return (
        <div className='detailedPost'>
            <div className="detailedPostWrapper">
                <img
                    src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="detPostImg" />

                <h1 className="postTitle">
                    Why abdus Salam was not accepted
                    <div className="detPostEdit">
                        <i className=" detPostIcon fa-regular fa-pen-to-square"></i>
                        <i className="detPostIcon fa-solid fa-trash"></i>
                    </div>

                </h1>
                <div className="detPostInfo">
                    <span className="detPostAuthor">Author: <b>Jordan Peterson</b></span>
                    <span className="detPostDate">1 hour ago</span>
                </div>
                <p className= 'postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                    maiores obcaecati et tempora sequi voluptate. Voluptatum atque perspiciatis exercitationem
                    debitis sapiente illum neque nemo? Laborum neque qui atque quidem saepe totam, quod aut nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                    maiores obcaecati et tempora sequi voluptate. Voluptatum atque perspiciatis exercitationem
                    debitis sapiente illum neque nemo? Laborum neque qui atque quidem saepe totam, quod aut nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                    maiores obcaecati et tempora sequi voluptate. Voluptatum atque perspiciatis exercitationem
                    debitis sapiente illum neque nemo? Laborum neque qui atque quidem saepe totam, quod aut nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                    maiores obcaecati et tempora sequi voluptate. Voluptatum atque perspiciatis exercitationem
                    debitis sapiente illum neque nemo? Laborum neque qui atque quidem saepe totam, quod aut nostrum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                    maiores obcaecati et tempora sequi voluptate. Voluptatum atque perspiciatis exercitationem
                    debitis sapiente illum neque nemo? Laborum neque qui atque quidem saepe totam, quod aut nostrum.
                </p>


            </div>
        </div>
    )
}
