import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import DashboardAdmin from "../pages/DashboardAdmin";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashboardAdmin />} />
                <Route path="/customers" element={<DashboardAdmin />} />
                <Route path="/ticket" element={<DashboardAdmin />} />
                <Route path="/flight" element={<DashboardAdmin />} />
            </Switch>
        </BrowserRouter>
    )
}