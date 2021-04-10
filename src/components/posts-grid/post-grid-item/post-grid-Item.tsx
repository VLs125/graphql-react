import React from 'react';
import {Post} from "../../common/interfaces/post";

const PostsGridItem: React.FC<{post:Post}> = ({post}:{post:Post}) => {

    return (
        <div>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <div>{post.body}</div>
        </div>
    )
}

export default PostsGridItem