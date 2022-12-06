import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/wishlist" element={<Wishlist />} />
            </Switch>
        </BrowserRouter>
    )
}