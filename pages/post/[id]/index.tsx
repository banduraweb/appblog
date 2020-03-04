import { NextPage } from 'next';

import React from 'react';
import { useRouter } from 'next/router';
import { CurrentPostProps } from '../../../types/types';
import { fetchCurrentPost } from '../../../redux-store/store';
import { Layout } from '../../../components/layout';
import { deletePost } from '../../../services';
import Link from 'next/link';

const BlogPost: NextPage<CurrentPostProps> = ({ currentPost }: CurrentPostProps) => {
    const router = useRouter();

    const handleDelete = (id: number | string) => {
        deletePost(id).then(() => router.push('/'));
    };

    return (
        <Layout title={currentPost.title}>
            <p>{currentPost.id}</p>
            <p>{currentPost.title}</p>
            <p>{currentPost.body}</p>
            <button><Link href="/post/create-post/:id"
                          as={`/post/create-post/${currentPost.id}`}>

                <a>EDIT POST</a>
            </Link></button>
            <button onClick={() => handleDelete(currentPost.id)}>DELETE POST</button>
        </Layout>
    );
};

// @ts-ignore
BlogPost.getInitialProps = async ({ reduxStore, query }) => {
    // @ts-ignore
    return await reduxStore.dispatch(fetchCurrentPost(query.id));
};

export default BlogPost;
