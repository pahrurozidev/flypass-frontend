import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../users/layouts/sidebar/Sidebar';
import Navbar from '../../users/layouts/navbar/Navbar';
import TicketList from './TicketListBooking';
import TicketDetail from './TicketDetailBooking';

export default function Customers() {
    const { id } = useParams();

    return (
        <div>
            <Sidebar />
            <div>
                <Navbar />
                <div className="main-container">
                {id && <TicketDetail />}
                {!id && <TicketList />}
                </div>
            </div>
        </div>
    );
}
