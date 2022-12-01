import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Profil from "../pages/Profil";
import EditProfil from "../pages/EditProfil";
import Wishlist from "../pages/Wishlist";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/dashboard" element={<Dashboard />} />   
                <Route exact path="/profil" element={<Profil />} />
                <Route exact path="/editprofil" element={<EditProfil />} />
                <Route exact path="/wishlist" element={<Wishlist />} />
            </Switch>
        </BrowserRouter>
    )
}