import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../../admin/layouts/sidebar/sidebaruser'
import Navbar from '../layouts/navbar/Navbar'
import NotificationItem from './NotificationItem'
import NotificationDetail from './NotificationDetail'

export default function Notification({ showSidebarDispatch }) {
    const { id } = useParams();

    return (
        <div>
            <Sidebar />
            <div>
                <Navbar showSidebarDispatch={showSidebarDispatch} />
                <div className='main-container'>
                    {id && <NotificationDetail />}
                    {!id && <NotificationItem />}
                </div>
            </div>
        </div>
    )
}