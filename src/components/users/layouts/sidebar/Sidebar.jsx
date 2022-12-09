import React from 'react';
import { LogoutCurve } from 'iconsax-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../../assets/dasboard-admin/Logo.svg';
import { NavLink, Link } from 'react-router-dom';
import UserSidebarLink from '../../../../assets/UserSidebarLink';

export default function Sidebar() {
    return (
        <ul className="nav flex-column border-end sidebar">
            <Link to={"/"} className="d-flex align-items-center mx-auto mt-3 text-decoration-none">
                <img src={Logo} alt="FlyPass" className='logo-large mb-4' />
                <FontAwesomeIcon icon={faPlaneDeparture} className='logo-small' />
            </Link>
            {/* <hr className="my-lg-3" /> */}
            {UserSidebarLink.map((item, index) => (
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
    );
}
