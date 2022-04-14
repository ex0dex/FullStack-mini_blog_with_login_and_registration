import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link , useNavigate} from 'react-router-dom'

const Post = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')

    useEffect(() => {
        const readPost = async()=>{
            const {data} = await axios.get(`http://localhost:5000/api/posts/${id}`)
            console.log(data)
    
            setImage(data.image)
            setTitle(data.title)
            setPost(data.post)
        }
        readPost()
    }, [id])

    const handleDelete = async (id) =>{
        const header = {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }
        await axios.delete(`http://localhost:5000/api/posts/${id}`,header).then((response)=>{
            if(response.data.error){
                alert(response.data.error)
            }
        })
        navigate('/')
    }
    return (
       <div style={{ height:""}} className="content">
           <section className="post">
               <header className="title">
                   <h4>{title}</h4>
               </header>
               <article className="post-description">
                   {post}
               </article>
               <Link to={`/edit/${id}`}>
                   <button>Edit Post</button>
               </Link>
               <Link to={`/`}>
                   <button onClick={()=>{
                       handleDelete(id)
                   }}>Delete Post</button>
               </Link> 
           </section>
       </div>
    );
};

export default Post;