import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DashboardAdmin from '../pages/DashboardAdmin';
import MyTicketUsers from '../pages/users/ListTicketUsers';
import DetailTicketUsers from '../pages/users/DetailTicketUsers';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* homepage */}
                <Route exact path="/" element={<Home />} />

                {/* auth */}

                {/* admin */}
                <Route path="/dashboard" element={<DashboardAdmin />} />
                <Route path="/customers" element={<DashboardAdmin />} />
                <Route path="/ticket" element={<DashboardAdmin />} />
                <Route path="/flight" element={<DashboardAdmin />} />

                {/* user */}
                <Route path="/dashboard-user" element={<MyTicketUsers />} />
                <Route path="/profile" element={<MyTicketUsers />} />
                <Route path="/my-ticket" element={<MyTicketUsers />} />
                <Route path="/my-ticket/detail-ticket" element={<DetailTicketUsers />} />
                <Route path="/transaction" element={<MyTicketUsers />} />
                <Route path="/transaction" element={<MyTicketUsers />} />
            </Switch>
        </BrowserRouter>
    )
}