import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/SharedComponents/Header/Header';
import Footer from '../Components/SharedComponents/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;