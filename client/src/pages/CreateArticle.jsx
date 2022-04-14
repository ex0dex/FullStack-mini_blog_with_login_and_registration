import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const CreateArticle = () => {
    const navigate = useNavigate()
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [post, setPost] = useState('')

    const addPost = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        const header = {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }
        formData.append('image', image)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('post', post)


        await axios.post('http://localhost:5000/api/posts/', formData, header).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            }else{
                navigate('/')
            }
        })
    }
    return (
        <div className='create-container'>
            <h1>Add Post</h1>
            <hr />
            <h2>Coose File</h2>
            <form onSubmit={addPost} method='post' encType='multipart/form-data'>
                <input type="file"
                    name='image'
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <h2>Enter Title</h2>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <h2>Enter Description</h2>
                <textarea type="text"
                    value={description}
                    as="textarea"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <h2>Enter Post</h2>
                <textarea type="text"
                    value={post}
                    as="textarea"
                    onChange={(e) => setPost(e.target.value)}
                />
                <button>Submit</button>
            </form>

        </div>
    );
};

export default CreateArticle;