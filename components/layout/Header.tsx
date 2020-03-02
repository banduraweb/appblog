import Link from 'next/link';
import React, { FC } from 'react';

const Header: FC = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
                |{' '}
                <Link href="/posts">
                    <a>Post's list</a>
                </Link>{' '}
                |{' '}
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
