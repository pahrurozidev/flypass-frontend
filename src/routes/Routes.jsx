import React from "react";
import { HashRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedLogin from "../components/protected/ProtectedLogin";
import Register2 from "../pages/Register2";

import DashboardAdmin from "../pages/DashboardAdmin";
import Customer from "../pages/Customer";
import Flight from "../pages/Flight";

import Dashboard from "../pages/Dashboard";
import Profil from "../pages/Profil";
import EditProfil from "../pages/EditProfil";
import UserNotification from "../pages/Notification";
import Search from "../pages/Search";
import Payments from "../pages/Payments";

import MyTicket from "../pages/MyTicketUser";
import Transaction from "../pages/TransactionUser";
import Wishlists from "../pages/Wishlists";
import AdminNotification from "../components/admin/notification/Notification";
import IsAdmin from "../components/protected/IsAdmin";
import IsUser from "../components/protected/IsUser";

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
                <Route path="/dashboard" element={<IsAdmin><DashboardAdmin /></IsAdmin>} />
                <Route path="/customer" element={<IsAdmin><Customer /></IsAdmin>} />
                <Route path="/customer/:id" element={<IsAdmin><Customer /></IsAdmin>} />
                <Route path="/flight" element={<IsAdmin><Flight /></IsAdmin>} />
                <Route path="/flight/:id" element={<IsAdmin><Flight /></IsAdmin>} />
                <Route path="/flight/create" element={<IsAdmin><Flight /></IsAdmin>} />
                <Route path="/flight/update" element={<IsAdmin><Flight /></IsAdmin>} />
                <Route path="/notification" element={<IsAdmin><AdminNotification /></IsAdmin>} />

                {/* user */}
                <Route exact path="/user/dashboard/dashboarduser" element={<IsUser><Dashboard /></IsUser>} />
                <Route path="/user/dashboard/dashboarduser/:id" element={<IsUser><Dashboard /></IsUser>} />
                <Route exact path="/user/dashboard/profile" element={<IsUser><Profil /></IsUser>} />
                <Route exact path="/user/dashboard/editprofile" element={<IsUser><EditProfil /></IsUser>} />
                <Route exact path="/user/dashboard/wishlist" element={<IsUser><Wishlists /></IsUser>} />
                <Route path="/user/dashboard/wishlist/:id" element={<IsUser><Wishlists /></IsUser>} />
                <Route exact path="/user/dashboard/notification" element={<IsUser><UserNotification /></IsUser>} />
                <Route path="/user/dashboard/ticket" element={<IsUser><MyTicket /></IsUser>} />
                <Route path="/user/dashboard/ticket/:id" element={<IsUser><MyTicket /></IsUser>} />
                <Route path="/user/dashboard/transaction" element={<IsUser><Transaction /></IsUser>} />
                <Route path="/user/dashboard/transaction/:id" element={<IsUser><Transaction /></IsUser>} />
            </Switch>
        </HashRouter>
    )
}