import React from 'react';
import { Search, Bell } from "react-feather";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Profile from '../../../../assets/dasboard-admin/profile.svg';

export default function navbar() {
    return (
        <nav className='navbar navbar-expand topbar static-top shadow'>
            <div className='d-none d-sm-inline-block form-inline ml-md-3 my-2 my-md-0 mw-100 navbar-search'>
                <div className='search-form'>
                    <input type="text" className='input-search' placeholder='Search...' aria-label='Search' aria-describedby='basic-add-on2' />
                    <button className='btn btn-search text-white p-0' type='button'><Search /></button>
                </div>
            </div>
            <ul className='navbar-nav profile-dropdown ms-auto'>
                <li className="nav-item dropdown">
                    <a href="#" className='nav-link dropdown-toggle toggle-notif' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <Bell className='notification-icon' />
                    </a>
                    <ul className="dropdown-menu notif-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#"><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} /> Message</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown user-profile">
                    <a href="#" className='nav-link dropdown-toggle link-profile' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className='img-profile rounded-circle' src={Profile} alt="" />
                        <span className='d-none d-lg-inline text-name'>Hi, Admin</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Customers</a></li>
                        <li><a className="dropdown-item" href="#">Tickets</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
