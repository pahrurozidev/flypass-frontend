import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
            </Switch>
        </BrowserRouter>
    )
}