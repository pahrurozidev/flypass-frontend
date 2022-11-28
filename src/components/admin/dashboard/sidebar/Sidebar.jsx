import React from 'react';
import { Home, Users } from 'react-feather';
import { LogoutCurve, Airplane } from 'iconsax-react';
import { TicketPerforated } from 'react-bootstrap-icons';
import Logo from '../../../../assets/dasboard-admin/Logo.svg';

export default function Sidebar() {
    return (
        <ul className="nav flex-column sidebar">
            <a href="#" className="navbar-brand d-flex align-items-center mx-auto mt-3 text-decoration-none">
                <img src={Logo} alt="FlyPass" />
            </a>
            <hr className="my-3" />
            <li className="nav-item">
                <a className="nav-link active" href="#">
                    <Home size={20} />
                    <span className='d-none d-sm-inline'>Dashboard</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <Users size={20} />
                    <span className='d-none d-sm-inline'>Customers</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <TicketPerforated size={20} />
                    <span className='d-none d-sm-inline'>Ticket</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <Airplane size={20} />
                    <span className='d-none d-sm-inline'>Flight</span>
                </a>
            </li>
            <li className="nav-item mt-auto pb-3 bd-highlight">
                <a className="nav-link" href="#">
                    <LogoutCurve size={20} />
                    <span className='d-none d-sm-inline'>Logout</span>
                </a>
            </li>
        </ul>
    )
}