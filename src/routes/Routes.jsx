import React from "react";
import { HashRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";

import DashboardAdmin from "../pages/DashboardAdmin";
import Customer from "../pages/Customer";
import Flight from "../pages/Flight";

import MyTicket from "../pages/MyTicketUser";

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                {/* homepage */}
                <Route exact path="/" element={<Home />} />

                {/* auth */}
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/register/personal" element={<Register2 />} />

                {/* admin */}
                <Route path="/dashboard" element={<DashboardAdmin />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/customer/:id" element={<Customer />} />
                <Route path="/flight" element={<Flight />} />
                <Route path="/flight/:id" element={<Flight />} />
                <Route path="/flight/create" element={<Flight />} />
                <Route path="/flight/update" element={<Flight />} />

                {/* user */}
                <Route path="/my-ticket" element={<MyTicket />} />
                <Route path="/my-ticket/:id" element={<MyTicket />} />
            </Switch>
        </HashRouter>
    )
}