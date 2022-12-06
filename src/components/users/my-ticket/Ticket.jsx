import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../layout/sidebar/Sidebar';
import Navbar from '../layout/navbar/Navbar';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

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
