import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";

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