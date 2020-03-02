import axios from 'axios';

const API_BASE_URL = 'https://simple-blog-api.crew.red';

export const getPosts = async (endpoint: string) => {
    const url = `${API_BASE_URL}${endpoint}`;
    const { data } = await axios.get(url);
    return data;
};
