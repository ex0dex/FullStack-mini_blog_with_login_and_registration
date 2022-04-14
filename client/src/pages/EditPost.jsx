import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router'
import axios from 'axios'

const EditPost = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [post, setPost] = useState('')

    useEffect(() => {
        const getPostById = async () => {
            const { data } = await axios.get(`http://localhost:5000/api/posts/${id}`)

            setTitle(data.title)
            setDescription(data.description)
            setPost(data.post)
        }
        getPostById()
    }, [id])

    const updateHandler = async (e) => {
        try {
            e.preventDefault()
            const data = {
                title:title,
                description:description,
                post:post
            }
            await axios.put(`http://localhost:5000/api/posts/${id}`,data)
            navigate('/')
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
       <div className="create-container">
           <h1>Update Post</h1>
           <hr />
           <form onSubmit={updateHandler} method="post">
           <h2>Edit Title</h2>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <h2>Edit Description</h2>
                <textarea type="text"
                    value={description}
                    as="textarea"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <h2>Edit Post</h2>
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

export default EditPost;