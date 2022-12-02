import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import DetailTicketUsers from './detailTicket/DetailTicket';

function DetailTicket() {
    return (
        <div className="d-flex">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <DetailTicketUsers />
                </div>
            </div>
        </div>
    );
}

export default DetailTicket;
