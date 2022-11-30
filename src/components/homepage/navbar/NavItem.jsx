import React from 'react'
import UserCircle from '../../../assets/homepage/user-circle.png';

export default function NavItem() {
    return (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">My Bookings</a>
                <a className="nav-link" href="#">services</a>
                <a className="nav-link" href="#">Contact us</a>
            </div>
            <div className="navbar-nav user ms-4">
                <img src={UserCircle} className="nav-link user-image" alt="" />
                <a className="nav-link px-0 mt-1" href="/login">Login</a>
                <a className="nav-link px-0 mt-1 slash">/</a>
                <a className="nav-link px-0 mt-1 register" href="/register">Register</a>
            </div>
        </div>
    )
}
