import React from 'react'
import Sidebar from '../layouts/sidebar/Sidebar'
import Navbar from '../layouts/navbar/navbar'
import NotificationItem from './NotificationItem'

export default function Notification() {
    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className="main-container">
                    <NotificationItem />
                </div>
            </div>
        </div>
    )
}
