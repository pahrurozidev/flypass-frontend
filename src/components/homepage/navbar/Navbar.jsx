import React from 'react';
import NavList from './NavList';
import UserCircle from '../../../assets/homepage/user-circle.png';
import FlyPass from '../../../assets/homepage/FlyPass.png';

export default function Navbar() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        //     <NavList />
        // </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={FlyPass} alt="" class="flypass-logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">My Bookings</a>
                        <a class="nav-link" href="#">services</a>
                        <a class="nav-link" href="#">Contact us</a>
                    </div>
                    <div class="navbar-nav user ms-4">
                        <img src={UserCircle} class="nav-link user-image" alt="" />
                        <a class="nav-link px-0 mt-1" href="#">Login</a>
                        <a class="nav-link px-0 mt-1 slash">/</a>
                        <a class="nav-link px-0 mt-1 register" href="#">Register</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
