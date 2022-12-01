import React from 'react'
import Sidebar from './dashboard/sidebar/Sidebar'
import Navbar from './dashboard/navbar/navbar'
import CardList from './dashboard/card/WishCard'

function WishlistPage() {
    return (
        <div className='d-flex'>
            <Sidebar />
            <div id='content-wrapper' className='d-flex flex-column'>
                <div id="content">
                    <Navbar />
                    <CardList />
                </div>
            </div>
        </div>
    )
}
export default WishlistPage