import React from 'react'
import Sidebar from '../layouts/sidebar/Sidebar'
import Navbar from '../layouts/navbar/navbar'
import CardList from './card/Card'

function dashboard() {
    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className='main-container'>
                    <div className='container-fluid pb-5'>
                        <div className='admin-content px-lg-2'>
                            <CardList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;