import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { PostType } from '../types/types';


export const Start_InitialState = {
    posts: [] as Array<PostType>,
};

export type TStart_InitialState = typeof Start_InitialState;

export const SAVE_POSTS = 'SAVE_POSTS';
export const DELETE_POST = 'DELETE_POST';

export type SavePosts = {
    type: typeof SAVE_POSTS
    payload: Array<PostType>
}


export type Action = SavePosts

export const savePosts = (posts: Array<PostType>): SavePosts => ({
    type: SAVE_POSTS,
    payload: posts,
});

export function fetchData() {
    return (dispatch: any) =>
        axios
            .get('https://simple-blog-api.crew.red/posts')
            .then(({ data }) => data)
            .then(items => dispatch(savePosts(items)));
}

export const loadReducer = (state = Start_InitialState, action: Action): Array<PostType> => {
    switch (action.type) {
        case SAVE_POSTS:
            const { payload } = action;
            return payload;
        default:
            // @ts-ignore
            return state;
    }
};

export const mainReducer = combineReducers({
    postList: loadReducer,
});

export function initializeStore(initialState = Start_InitialState) {
    // @ts-ignore
    return createStore(mainReducer, initialState, applyMiddleware(thunk));
}
