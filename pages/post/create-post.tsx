import React, { FC, useState } from 'react';
import { Layout } from '../../components/layout';
import { createPost } from '../../services';
import { PostType } from '../../types/types';
import { useRouter } from 'next/router';

const CreatePost: FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        body: '',
    });
    console.log(router);
    const handlerChange = (event: { target: { name: string; value: string } }):void => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleConfirm = (data: PostType):void => {
        createPost(data).then(() => router.push('/posts'));
    };
    //console.log(formData);
    return (
        <Layout title="posts">
            <div>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="GET-title">Title:</label>
                <input id="GET-title" type="text" name="title" value={formData.title} onChange={handlerChange} />
                <label htmlFor="GET-body">Post:</label>
                <textarea id="GET-body" name="body" value={formData.body} onChange={handlerChange} />
                <button onClick={() => handleConfirm(formData)}>Post</button>
            </form>
            </div>
        </Layout>
    );
};

export default CreatePost;
