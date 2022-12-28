import React from "react";
import { HashRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Protected from "../components/protected/Protected";
import ProtectedLogin from "../components/protected/ProtectedLogin";
import Register2 from "../pages/Register2";

import DashboardAdmin from "../pages/DashboardAdmin";
import Customer from "../pages/Customer";
import Flight from "../pages/Flight";

import Dashboard from "../pages/Dashboard";
import Profil from "../pages/Profil";
import EditProfil from "../pages/EditProfil";
import Notification from "../pages/Notification";
import Search from "../pages/Search";
import Payments from "../pages/Payments";

import MyTicket from "../pages/MyTicketUser";
import Transaction from "../pages/TransactionUser";
import Wishlists from "../pages/Wishlists";

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                {/* homepage */}
                <Route exact path="/" element={<Home />} />
                {/* <Route path="/search" element={<Search />} /> */}
                <Route path="/search/flight/:id" element={<Payments />} />
                <Route path="/search/flight/payment/:id" element={<Payments />} />
                <Route path="/search/flight/payment/completed" element={<Payments />} />

                {/* auth */}
                <Route exact path="/login" element={<ProtectedLogin><Login /></ProtectedLogin>} />
                <Route exact path="/register" element={<ProtectedLogin><Register /></ProtectedLogin>} />
                <Route exact path="/register/personal" element={<ProtectedLogin><Register2 /></ProtectedLogin>} />

                {/* admin */}
                <Route path="/dashboard" element={<DashboardAdmin />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/customer/:id" element={<Customer />} />
                <Route path="/flight" element={<Flight />} />
                <Route path="/flight/:id" element={<Flight />} />
                <Route path="/flight/create" element={<Flight />} />
                <Route path="/flight/update/:id" element={<Flight />} />

                {/* user */}
                <Route exact path="/user/dashboard/dashboarduser" element={<Protected><Dashboard /></Protected>} />
                <Route path="/user/dashboard/dashboarduser/:id" element={<Protected><Dashboard /></Protected>} />
                <Route exact path="/user/dashboard/profile" element={<Protected><Profil /></Protected>} />
                <Route exact path="/user/dashboard/editprofile" element={<Protected><EditProfil /></Protected>} />
                <Route exact path="/user/dashboard/wishlist" element={<Protected><Wishlists /></Protected>} />
                <Route path="/user/dashboard/wishlist/:id" element={<Protected><Wishlists /></Protected>} />
                <Route exact path="/user/dashboard/notification" element={<Protected><Notification /></Protected>} />
                <Route path="/user/dashboard/ticket" element={<Protected><MyTicket /></Protected>} />
                <Route path="/user/dashboard/ticket/:id" element={<Protected><MyTicket /></Protected>} />
                <Route path="/user/dashboard/transaction" element={<Protected><Transaction /></Protected>} />
                <Route path="/user/dashboard/transaction/:id" element={<Protected><Transaction /></Protected>} />
            </Switch>
        </HashRouter>
    )
}