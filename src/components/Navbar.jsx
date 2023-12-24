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
        <div>
            <h2>Nav in - The next Sadakat.</h2>
            <ul>
                {
                    navLinks.map(({ path, title }) => <li key={path}>
                        <Link href={path}>{title}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Navbar;