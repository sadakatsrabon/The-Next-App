import Link from 'next/link';
import React from 'react';

const navLinks = [
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/dashboard/addproduct',
        title: 'Add Product'
    },
    {
        path: '/dashboard/manage',
        title: 'Manage Product'
    }
]

const Sidebar = () => {
    return (
        <div>
            <aside>
                <h4>Dashboard</h4>
                <ul>
                    {
                        navLinks.map(({path, title}) =>(
                            <li key={path}>
                                <Link href={path}>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;