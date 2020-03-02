import React, { FC } from 'react';
import {  useSelector } from "react-redux";
import { Layout } from '../components/layout';

const HomePage: FC = () => {
    const data = useSelector(state => state);
    console.log(data,"data");
    return (
        <Layout title="About">
            <h1>About service</h1>
        </Layout>
    );
};

export default HomePage;
