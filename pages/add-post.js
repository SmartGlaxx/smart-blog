import React, { useState, useRef } from 'react'
import Axios from 'axios'
import {useRouter} from 'next/router'
import MyButton from '../components/button';
import {url} from '../utils/constants'
import { styled } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { FormControl } from '@material-ui/core';

const AddPost =()=>{
    const [error, setError] = useState(false)
    const inputRef = useRef()
    const textAreaRef = useRef()
    let router = useRouter();
    
    const addNewPost = async()=>{
        const title = inputRef.current.value
        const postbody = textAreaRef.current.value

        const postParams = {
            title : title,
            postbody : postbody
        }
    
   await Axios.post(url, postParams)
    .then(result =>{
         router.push("/");
    })
    .catch(error=>{
        setError(true)
        alert(error)
        setTimeout(() => {
            setError(false)
        }, 5000);
    })
    }

    return <div className='formpage'>
    <div className='addpost'>
    {error && <div>Post already exists. Please edit it or try a new post title.</div>}
    <form onSubmit ={(e)=>e.preventDefault()}>
        <label htmlFor='title' className='label'>Post Title</label>
        <input type ='text' name ='title' id='title' className='input' ref={inputRef}/><br />
        <label htmlFor='post' className='label'>Post</label>
        <TextareaAutosize aria-label="minimum height"  name='postbody'  id='post' className='textarea' rowsMin={3} ref ={textAreaRef} />
        <div className='btn-container'>
        <MyButton variant="contained" color="primary" type='submit' onClick={addNewPost}>Add Post</MyButton>
        </div>
    </form>
    </div>
    </div>
}

export default AddPost