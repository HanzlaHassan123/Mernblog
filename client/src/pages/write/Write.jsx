import React from 'react'
import './write.css'
export default function Write() {
    return (
        <div className='write'>
            <img 
            src="https://cdn.pixabay.com/photo/2018/02/23/22/04/book-bindings-3176776_640.jpg" 
            alt="" 
            className='writeImg'
            />
            <form className='writeForm' action="">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="addIcon   fa-solid fa-circle-plus"></i>
                    </label>
                    <input type="file" style={{ display: "none" }} id='fileInput' />
                    <input type="text" placeholder='title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder='tell Your Story'
                        type='text'
                        className='writeInput writeText' >
                    </textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    )
}
