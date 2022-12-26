import React, { Component, Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-use-history';
import { Link } from 'react-router-dom';
import { Menu } from "react-feather";
import { Search, Bell } from "react-feather";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Profile from '../../../../assets/dasboard-admin/profile.svg';
import { actionType } from '../../../../redux/reducer/globalActionType';

export default function navbar({ showSidebarDispatch }) {
    const [name, setUsername] = useState('');
    const [token, setToken] = useState('');
    // const [user, setUser] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch(`http://localhost:8080/v1/whoami`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // setUser(data.data.user);
                setUsername(data.name);
            });
        // setIsLoggedIn(!!token);
    }, []);
    return (
        <nav className='navbar navbar-expand topbar static-top card fixed-top border-end-0'>
            <ul className='navbar-nav profile-dropdown ms-auto'>
                <li className='nav-item sidebar-toggle'>
                    <Menu
                        size={38}
                        onClick={() => showSidebarDispatch}
                        className="bg-light px-2 rounded-circle shadow border text-secondary" />
                </li>
                <li className="nav-item dropdown user-profile">
                    <a href="#" className='nav-link dropdown-toggle link-profile' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className='img-profile rounded-circle' src={Profile} alt="" />
                        <span className='d-none d-lg-inline text-name'>Hi, {name}</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to={'/'} className="dropdown-item">Beranda</Link>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Logout</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
