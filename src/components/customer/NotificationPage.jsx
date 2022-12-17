import React from 'react'
import Sidebar from '../admin/layouts/sidebar/sidebaruser'
import Navbar from '../users/layouts/navbar/Navbar'
import NotifCard from './dashboard/card/NotifCard'

function NotificationPage() {
    return (
        <div className='d-flex'>
            <Sidebar />
            <div className='main-container'>
                <div id='content-wrapper' className='d-flex flex-column'>
                    <div id="content">
                        <Navbar />
                        <NotifCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotificationPage