import React from 'react';
import { Home, Users } from 'react-feather';
import { LogoutCurve, Airplane } from 'iconsax-react';
import { TicketPerforated } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../../assets/dasboard-admin/Logo.svg';
import { NavLink } from 'react-router-dom';
import sidebarLink from '../../../../assets/UserSidebarLink';

export default function Sidebar() {
    return (
        <ul className="nav flex-column sidebar">
            <a href="#" className="d-flex align-items-center mx-auto mt-3 text-decoration-none">
                <img src={Logo} alt="FlyPass" className='logo-large' />
                <FontAwesomeIcon icon={faPlaneDeparture} className='logo-small' />
            </a>
            <hr className="my-lg-3" />
            {sidebarLink.map((item, index) => (
                <li className="nav-item list-sidebar" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? "active nav-link" : "nav-link"}>
                        <i className={item.icon}></i>
                        <span>{item.display}</span>
                    </NavLink>
                </li>
            ))}
            <li className="nav-item list-sidebar mt-auto pb-3 bd-highlight">
                <a className="nav-link link-sidebar" href="#">
                    <LogoutCurve size={20} />
                    <span>Logout</span>
                </a>
            </li>
        </ul>
    )
}