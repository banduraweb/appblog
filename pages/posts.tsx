import React from 'react';
import { NextPage } from 'next';
import { Layout } from '../components/layout';
import { fetchData } from '../redux-store/store';
import Link from 'next/link';
import { PostType } from '../types/types';

type PostsPageProps = {
    payload: Array<PostType>;
};
const PostsPage: NextPage<PostsPageProps> = ({ payload }: PostsPageProps) => {

    return (
        <Layout title="posts">
            <ul>
                {payload.map(item => (
                    <li key={item.id}>
                        <Link href="/post/[id]" as={`/post/${item.id}`}>
                            <a>
                                <p>{item.title}</p>
                                {item.body}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};




PostsPage.getInitialProps = async ({ reduxStore }: any) => await reduxStore.dispatch(fetchData());

export default PostsPage;
