import Head from 'next/head';
import React, { Fragment, FC } from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
    title: string;
};

const Layout: FC<LayoutProps> = ({ title, children }) => {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header />

            {children}

            <Footer />
        </Fragment>
    );
};

export default Layout;
