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
                <Route exact path="/dashboarduser" element={<Dashboard />} />   
                <Route exact path="/profil" element={<Profil />} />
                <Route exact path="/editprofil" element={<EditProfil />} />
                <Route exact path="/wishlist" element={<Wishlist />} />
                <Route exact path="/notifuser" element={<Notification />} />
            </Switch>
        </HashRouter>
    )
}