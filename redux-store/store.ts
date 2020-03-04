import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { PostType } from '../types/types';

export const DefaultState = {
    postList: [] as Array<PostType>,
    currentPost: Object,
};

export const SAVE_POSTS = 'SAVE_POSTS';
export const GET_CURRENT_POST = 'GET_CURRENT_POST';

export type SavePosts = {
    type: typeof SAVE_POSTS;
    postList: Array<PostType>;
};

export type SaveCurrentPost = {
    type: typeof GET_CURRENT_POST;
    currentPost: Record<string, any>;
};

export type Action = SavePosts | SaveCurrentPost;

export const savePosts = (posts: Array<PostType>): SavePosts => ({
    type: SAVE_POSTS,
    postList: posts,
});

export const saveCurrentPost = (post: PostType): SaveCurrentPost => ({
    type: GET_CURRENT_POST,
    currentPost: post,
});

export function fetchData() {
    return (dispatch: any): Promise<SavePosts> =>
        axios
            .get('https://simple-blog-api.crew.red/posts')
            .then(({ data }) => data)
            .then(items => dispatch(savePosts(items)));
}

export function fetchCurrentPost(id: number | string) {
    return (dispatch: any): Promise<SavePosts> =>
        axios
            .get(`https://simple-blog-api.crew.red/posts/${id}`)
            .then(({ data }) => data)
            .then(items => dispatch(saveCurrentPost(items)));
}

export const loadReducer = (state = DefaultState, action: Action) => {
    switch (action.type) {
        case SAVE_POSTS:
            const { postList } = action;
            return {
                ...state,
                postList: postList,
            };
        case GET_CURRENT_POST:
            const { currentPost } = action;

            return {
                ...state,
                // @ts-ignore
                currentPost: currentPost,
            };
        default:
            return state;
    }
};

export const mainReducer = combineReducers({
    loadReducer,
});

export function initializeStore(initialState = DefaultState) {
    // @ts-ignore
    return createStore(mainReducer, initialState, applyMiddleware(thunk));
}
