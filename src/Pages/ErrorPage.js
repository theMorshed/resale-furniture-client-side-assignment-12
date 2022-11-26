import React from 'react';
import Footer from '../Sections/Common/Footer';
import Header from '../Sections/Common/Header';
import furniture_error from '../assets/images/furniture-error.jpg';

const ErrorPage = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <Header></Header>
            <img className='w-full' src={furniture_error} alt="furniture error" />
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;