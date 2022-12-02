import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import ListTicket from './listTicket/ListTicket';

function MyTicket() {
    return (
        <div className="d-flex">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <ListTicket />
                </div>
            </div>
        </div>
    );
}

export default MyTicket;
