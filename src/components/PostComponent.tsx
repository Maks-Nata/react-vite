import {IPost} from "../models/IPost.ts";

interface PostComponentProps {
    post: IPost
}

export const PostComponent = ({post}: PostComponentProps) => {
    return (
        <div>
            <div>{post.title}</div>
        </div>
    );
};

