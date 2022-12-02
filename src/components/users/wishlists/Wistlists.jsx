import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import WishlistCard from './wishlist-content/WishlistCard';

function Wishlist() {
    return (
        <div className="d-flex">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <WishlistCard />
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
