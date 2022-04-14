import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import PostCard from '../components/PostCard';

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getPostData = async () => {
            const { data } = await axios.get("http://localhost:5000/api/posts")
            setPosts(data)
            console.log(data)
        }

        getPostData()
    }
        , [])
    return (
        <div>
            {posts.map(post => {
                return (<PostCard post={post} key={post.id} />)
            }).reverse()}
            
        </div>
    );
};

export default Posts;