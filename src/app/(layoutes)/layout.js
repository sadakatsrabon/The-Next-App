import Navbar from '@/components/Navbar';
import React from 'react';

const Layoutes = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            Hellow layoutes . {children}
            <footer className='bg-red-500 text-center text-xl font-bold uppercase'>footer</footer>
        </div>
    );
};

export default Layoutes;