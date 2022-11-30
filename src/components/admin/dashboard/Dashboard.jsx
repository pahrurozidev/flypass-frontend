import React from 'react'
import Sidebar from '../layouts/sidebar/Sidebar'
import Navbar from '../layouts/navbar/navbar'
import CardList from './card/Card'

function dashboard() {
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

export default dashboard;