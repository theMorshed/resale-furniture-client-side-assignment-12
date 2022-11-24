import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sections/Common/Footer';
import Header from '../Sections/Common/Header';
import Banner from '../Sections/Home/Banner';


const Main = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <Header></Header>
            <Banner></Banner>            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;