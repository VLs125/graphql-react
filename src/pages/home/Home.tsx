import React, {useEffect, useState} from 'react';
import './Home.css'
import PostsGrid from "../../components/posts-grid/posts-grid";
import {useGetPosts} from "../../components/hooks/posts/useGetPosts";

const Home = ()=>{

const posts = useGetPosts();
    return(
        <div className="home">
            <PostsGrid posts={posts || []}/>
        </div>
    )
}


export default Home