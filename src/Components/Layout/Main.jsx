import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           <div  className='fixed bottom-0 mx-auto'>
            <Footer></Footer>

           </div>
        </div>
    );
};

export default Main;