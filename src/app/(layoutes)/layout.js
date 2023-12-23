import React from 'react';

const Layoutes = ({ children }) => {
    return (
        <div>
            <nav className='flex justify-around bg-red-500'>
                <a className='text-xl bg-red-600 rounded-lg p-1'>Home</a>
                <a className='text-xl bg-red-600 rounded-lg p-1'>House</a>
                <a className='text-xl bg-red-600 rounded-lg p-1'>Hut</a>
            </nav>
            Hellow layoutes . {children}
            <footer className='bg-red-500 text-center text-xl font-bold uppercase'>footer</footer>
        </div>
    );
};

export default Layoutes;