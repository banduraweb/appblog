import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { PostType } from '../types/types';

export const deletePost = (id: number | string) => {
    return axios.delete(`https://simple-blog-api.crew.red/posts/${id}`).then(res => console.log(res.data));
};

export const createPost = (post: PostType) => {
    post.id = uuidv4();
    return axios.post(`https://simple-blog-api.crew.red/posts/`, post).then(res => res.data);
};
