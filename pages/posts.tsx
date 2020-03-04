import React from 'react';
import { NextPage } from 'next';
import { Layout } from '../components/layout';
import { fetchData } from '../redux-store/store';
import Link from 'next/link';
import { PostsPageProps } from '../types/types';

const PostsPage: NextPage<PostsPageProps> = ({ postList }: PostsPageProps) => {
    //  console.log(postList, 'postList');
    return (
        <Layout title="posts">
            <ul>
                {postList.map(item => (
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

PostsPage.getInitialProps = async ({ reduxStore }: any): Promise<PostsPageProps> =>
    await reduxStore.dispatch(fetchData());

export default PostsPage;
