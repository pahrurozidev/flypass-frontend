import React from 'react';
import Profile from '../../../../assets/dasboard-admin/profile.svg';

export default function navbar() {
    return (
        <nav className='navbar navbar-expand topbar static-top card fixed-top border-end-0'>
            <div></div>
            <ul className='navbar-nav profile-dropdown ms-auto'>
                <li className="nav-item dropdown user-profile">
                    <a href="#" className='nav-link dropdown-toggle link-profile' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className='img-profile rounded-circle' src={Profile} alt="" />
                        <span className='d-none d-lg-inline text-name'>Hi, John</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/profil">Profil</a></li>
                        <li><a className="dropdown-item" href="/myticket">My Tickets</a></li>
                        <li><a className="dropdown-item" href="transaction">Transaction</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
