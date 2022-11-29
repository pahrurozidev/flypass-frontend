import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import DashboardAdmin from "../pages/DashboardAdmin";

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
            </Switch>
        </BrowserRouter>
    )
}