import React from 'react'
import Sidebar from '../admin/layouts/sidebar/sidebaruser'
import Navbar from '../users/layouts/navbar/Navbar'
import NotifCard from './dashboard/card/NotifCard'

function NotificationPage() {
    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className='main-container'>
                    <NotifCard />
                </div>
            </div>
        </div>
    )
}
export default NotificationPage;