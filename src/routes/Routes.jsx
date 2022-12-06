import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profil from "../pages/Profil";
import EditProfil from "../pages/EditProfil";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Home />} />  
                <Route exact path="/profil" element={<Profil />} />
                <Route exact path="/editprofil" element={<EditProfil />} />
            </Switch>
        </BrowserRouter>
    )
}