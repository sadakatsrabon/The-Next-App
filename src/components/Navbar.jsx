import Link from 'next/link';
import React from 'react';
const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/profile',
        title: 'Profile'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    }
]

const Navbar = () => {
    return (
        <nav className='bg-red-400'>
            <ul className='flex justify-around'>
                {
                    navLinks.map(({ path, title }) =>
                        <li className=' bg-red-500 rounded-md p-1 font-semibold uppercase' key={path}>
                            <Link href={path}>{title}</Link>
                        </li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;