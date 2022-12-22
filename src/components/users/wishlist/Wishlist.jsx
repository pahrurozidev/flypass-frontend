import React from 'react';
import Sidebar from '../layouts/sidebar/Sidebar';
import Navbar from '../layouts/navbar/Navbar';
import WishlistList from './WishlistLists';

export default function Wishlist() {

    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className="main-container">
                    <WishlistList />
                </div>
            </div>
        </div>
    );
}
