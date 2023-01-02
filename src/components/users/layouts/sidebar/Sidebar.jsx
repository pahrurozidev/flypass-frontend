import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LogoutCurve, ArrowCircleLeft } from 'iconsax-react';
import Logo from '../../../../assets/dasboard-admin/Logo.svg';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { actionType } from '../../../../redux/reducer/globalActionType';
import UserSidebarLink from '../../../../assets/UserSidebarLink';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useHistory } from 'react-router-use-history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    const history = useHistory();
    const navigate = useNavigate();

    const Logout = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_BASE_URL}/v1/logout`)
            history.push("/login")
        } catch (error) {
            console.log(error)
        }
    }

    const onLogoutHandler = () => {
        localStorage.removeItem('token');
        navigate('/login')

        setTimeout(() => {
            window.location.reload();
        }, 300);
    }

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
                <Link to={'/login'} className="nav-link link-sidebar" onClick={() => onLogoutHandler()}>
                    <LogoutCurve size={20} />
                    <span onClick={Logout}>Logout</span>
                </Link>
            </li>
        </ul>
    );
}

