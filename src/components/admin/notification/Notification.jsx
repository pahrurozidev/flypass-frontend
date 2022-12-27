import React from 'react'
import Sidebar from '../layouts/sidebar/Sidebar'
import Navbar from '../layouts/navbar/navbar'
import NotificationList from './NotificationList'

export default function Notification() {
    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className="main-container">
                    <NotificationList />
                </div>
            </div>
        </div>
    )
}
