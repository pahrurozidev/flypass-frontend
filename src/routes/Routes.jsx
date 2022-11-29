import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import DashboardAdmin from "../pages/DashboardAdmin";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Home />} />
                
                <Route path="/dashboard" element={<DashboardAdmin />} />
                <Route path="/customers" element={<DashboardAdmin />} />
                <Route path="/flight" element={<DashboardAdmin />} />

                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/register2" element={<Register2 />} />
            </Switch>
        </BrowserRouter>
    )
}