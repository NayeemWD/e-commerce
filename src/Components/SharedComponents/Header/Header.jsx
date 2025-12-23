import React from 'react';
import TopHeader from './TopHeader';
import MinHeader from './MinHeader';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <MinHeader></MinHeader>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;