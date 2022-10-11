import Posts from '../../components/posts/Posts'
import { useEffect, useState } from 'react'
import React from 'react';
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async() =>{
      const res = await axios.get("/post/")
      setPosts(res.data)
    }
    getPosts()
  },[])
  return (
    <div className='home' data-testid='manyposts'>
        <Posts posts={posts}/>
    </div>
  )
}
