import React from 'react';
import {Post} from "../common/interfaces/post";
import PostsGridItem from "./post-grid-item/post-grid-Item";

interface PostsGridProps {
    posts: Post[]
}

const PostsGrid: React.FC<PostsGridProps> = ({posts}: PostsGridProps) => {
    if (!posts){
      return  <div>Loading</div>
    }
    return (
        <div className="posts-grid">
            {posts.map(post => {
                const {id} = post;
             return(
                 <div key={id}>
                    <PostsGridItem post = {post}/>
                </div>
             )})}
        </div>
    )
}

export default PostsGrid