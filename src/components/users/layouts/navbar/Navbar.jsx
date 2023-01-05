import React, { Component, Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-use-history';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from "react-feather";
import { Search, Bell } from "react-feather";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Profile from '../../../../assets/dasboard-admin/profile.svg';
import { actionType } from '../../../../redux/reducer/globalActionType';

export default function navbar({ showSidebarDispatch }) {
    const navigate = useNavigate();
    const [name, setUsername] = useState('');
    const [token, setToken] = useState('');
    // const [user, setUser] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch(`${import.meta.env.VITE_BASE_URL}/v1/whoami`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUsername(data.name);
            });
        // setIsLoggedIn(!!token);
    }, []);

    const onLogoutHandler = () => {
        localStorage.removeItem('token');
        navigate('/login')

        setTimeout(() => {
            window.location.reload();
        }, 300);
    }

    return (
        <nav className='navbar navbar-expand topbar static-top card fixed-top border-end-0'>
            <ul className='navbar-nav profile-dropdown ms-auto'>
                <li className='nav-item sidebar-toggle'>
                    <Menu
                        size={38}
                        onClick={() => showSidebarDispatch()}
                        className="bg-light px-2 rounded-circle shadow border text-secondary" />
                </li>
                <li className="nav-item dropdown user-profile">
                    <a href="#" className='nav-link dropdown-toggle link-profile' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className='img-profile rounded-circle' src={Profile} alt="" />
                        <span className='d-none d-lg-inline text-name'>Hi, {name}</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a href='/' className="dropdown-item">Beranda</a>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li onClick={() => onLogoutHandler()}>
                            <div className="dropdown-item">Logout</div>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
