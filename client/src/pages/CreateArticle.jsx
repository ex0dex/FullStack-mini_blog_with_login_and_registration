import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const CreateArticle = () => {
    const navigate = useNavigate()
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addPost = async (e) =>{
        e.preventDefault()

        const formData = new FormData()

        formData.append('image', image)
        formData.append('title', title)
        formData.append('description', description)

        await axios.post('http://localhost:5000/api/posts/', formData, {
            headers:{
                accessToken: localStorage.getItem("accessToken")
            }
        })
        navigate('/')
    }
    return (
        <div>
           <h1>Add Post</h1>
           <hr />
           <form onSubmit={addPost} method='post' encType='multipart/form-data'>
               <input type="file"
               name='image'
               onChange={(e)=> setImage(e.target.files[0])}
               />
               <input type="text"
               value={title}
               onChange={(e)=> setTitle(e.target.value)}
               />
               <input type="text"
               value={description}
               as='textarea'
               onChange={(e)=> setDescription(e.target.value)}
               />
               <button>Submit</button>
           </form>
           
        </div>
    );
};

export default CreateArticle;