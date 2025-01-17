import {useEffect, useState} from "react";
import {IPost} from "../models/IPost.ts";
import {getPosts} from "../services/posts.api.services.ts";
import {IBaceResponseModel} from "../models/IBaceResponseModel.ts";
import {PostComponent} from "./PostComponent.tsx";




const PostsComponent = () => {
    const [posts,setPosts]=useState<IPost[]>([])
    useEffect(()=>{getPosts<IBaceResponseModel & {posts:IPost[]}>().then(({posts} )=> setPosts(posts))},[])
    return (
        <div>
            {
                posts.map((post:IPost)=><PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;