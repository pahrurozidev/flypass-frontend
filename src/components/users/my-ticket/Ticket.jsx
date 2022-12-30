import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../admin/layouts/sidebar/sidebaruser'
import Navbar from '../layouts/navbar/Navbar';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

export default function Customers({ showSidebarDispatch }) {
    const { id } = useParams();

    return (
        <div>
            <Sidebar />
            <div>
                <Navbar showSidebarDispatch={showSidebarDispatch} />
                <div className="main-container">
                    {id && <TicketDetail />}
                    {!id && <TicketList />}
                </div>
            </div>
        </div>
    );
}
