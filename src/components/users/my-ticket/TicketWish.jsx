import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../admin/layouts/sidebar/sidebaruser';
import Navbar from '../../users/layouts/navbar/Navbar';
import TicketList from './TicketListWish';
import TicketDetail from './TicketDetailWish';

export default function Customers() {
    const { id } = useParams();

    return (
        <div className="d-flex">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    {id && <TicketDetail />}
                    {!id && <TicketList />}
                </div>
            </div>
        </div>
    );
}
