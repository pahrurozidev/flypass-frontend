import React from 'react'
import Sidebar from './dashboard/sidebar/Sidebar'
import Navbar from './dashboard/navbar/navbar3'
import CardList from './dashboard/card/Card'

function DasboardPage() {
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
export default DasboardPage