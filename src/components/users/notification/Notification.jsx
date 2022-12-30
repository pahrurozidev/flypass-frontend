import React from 'react'
import Sidebar from '../../admin/layouts/sidebar/sidebaruser'
import Navbar from '../layouts/navbar/Navbar'
import NotificationItem from './NotificationItem'

function Notification() {
    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className='main-container'>
                    <NotificationItem />
                </div>
            </div>
        </div>
    )
}
export default Notification;