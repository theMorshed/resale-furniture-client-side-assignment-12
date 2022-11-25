import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sections/Common/Footer';
import Header from '../Sections/Common/Header';

const DashboardLayout = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;