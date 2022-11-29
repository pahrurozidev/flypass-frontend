import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Navbar from './navbar/navbar'
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

export default dashboard