import React from "react";
import { HashRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";

import DashboardAdmin from "../pages/DashboardAdmin";
import Customer from "../pages/Customer";
import Flight from "../pages/Flight";

import Dashboard from "../pages/Dashboard";
import Profil from "../pages/Profil";
import EditProfil from "../pages/EditProfil";
import Wishlist from "../pages/Wishlist";
import Notification from "../pages/Notification";
import Search from "../pages/Search";
import Payments from "../pages/Payments";

import MyTicket from "../pages/MyTicketUser";
import Transaction from "../pages/TransactionUser";

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                {/* homepage */}
                <Route exact path="/" element={<Home />} />
                {/* <Route path="/search" element={<Search />} /> */}
                <Route path="/search/flight/:id" element={<Payments />} />
                <Route path="/search/flight/payment" element={<Payments />} />

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
                <Route path="/flight/update/:id" element={<Flight />} />

                {/* user */}
                <Route path="/user/dashboard/ticket" element={<MyTicket />} />
                <Route path="/user/dashboard/ticket/:id" element={<MyTicket />} />
                <Route path="/user/dashboard/transaction" element={<Transaction />} />
                <Route path="/user/dashboard/transaction/:id" element={<Transaction />} />

                <Route exact path="/user/dashboard" element={<Dashboard />} />
                <Route path="/user/dashboard/:id" element={<Dashboard />} />
                <Route exact path="/user/dashboard/profile" element={<Profil />} />
                <Route exact path="/user/dashboard/profile/edit" element={<EditProfil />} />
                <Route exact path="/user/dashboard/wishlist" element={<Wishlist />} />
                <Route path="/user/dashboard/wishlist/:id" element={<Wishlist />} />
                <Route exact path="/user/dashboard/notification" element={<Notification />} />
                <Route exact path="/user/dashboard/notification/:id" element={<Notification />} />
            </Switch>
        </HashRouter>
    )
}