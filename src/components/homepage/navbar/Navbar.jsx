import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavList from './NavList';
import UserCircle from '../../../assets/homepage/user-circle.png';
import Logo from '../../../assets/homepage/Logo.png';
import Bell from '../../../assets/homepage/bell.png';
import { Navigate } from 'react-router-dom';
import { API } from '../../../services';
import moment from 'moment';

export default function Navbar() {
    const location = useLocation().pathname;

    const [name, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [token, setToken] = useState('');
    const [login, setLogin] = useState(false)
    const [notification, setNotification] = useState([]);
    // const [user, setUser] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch(`https://flypass-api.up.railway.app/v1/whoami`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                // setUser(data.data.user);
                setUsername(data.name);
                setImage(data.image);
            });
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLogin(false)
        } else {
            setLogin(true)
        }

        API.userNotifications().then((notif) => {
            setNotification(notif);
        })
    }, []);

    function handleLogout() {
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        alert("Kamu Berhasil Logout");
        Navigate('/#/login')
    }

    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        //     <NavList />
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link to={'/'} className="navbar-brand">
                    <img src={Logo} alt="" className="flypass-logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {(location === "/login" ||
                        location === "/register" ||
                        location === "/register2" ||
                        location === "/register/personal" ||
                        location === "/search/flight/detail" ||
                        location === "/search/flight/payment" ||
                        location === "/search") ?
                        <div className='navbar-nav ms-auto'></div> :
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#booking">My Bookings</a>
                            <a className="nav-link" href="#service">services</a>
                            <a className="nav-link" href="#contact">Contact us</a>
                        </div>
                    }
                    {!login ? (
                        <div>
                            <div></div>
                            <div className="navbar-nav user ms-4">
                                <img src={UserCircle} className="nav-link user-image" alt="" />
                                <div className='d-flex log-reg-link'>
                                    <Link to={'/login'} className="nav-link px-0">Login</Link>
                                    <a className="nav-link px-0 slash">/</a>
                                    <Link to={'/register'} className="nav-link px-0 register">Register</Link>
                                </div>
                            </div>
                        </div>

                    ) : (
                        <div className='d-flex gap-4 items-center'>
                            <div className='bell'>
                                <div className="nav-item dropdown no-arrow">

                                    <a href="#" className='bell-auth' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Bell} alt="bell icon" />
                                        <div className='notif-count'>{notification.length}</div>
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li className='dropdown-header mb-2'>
                                            <a className="dropdown-item large text-center fs-6" href="#">Notification</a>
                                        </li>
                                        {notification.map((notif) => (
                                            <>
                                                <li>
                                                    <hr className="dropdown-divider m-0" />
                                                </li>
                                                <li>
                                                    <a className={`dropdown-item d-flex align-items-center py-3 ${notif.isRead && 'text-muted'}`} href="#">
                                                        <div className='d-flex flex-column gap-2'>
                                                            <span className="font-weight-bold unread">{notif.message}</span>
                                                            <div className="small text-gray-500">{moment(notif.updatedAt).format('LLLL')}</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </>
                                        ))}
                                        <li>
                                            <hr className="dropdown-divider m-0" />
                                        </li>
                                        <li>
                                            <Link to={'/user/dashboard/notification'} className="dropdown-item small text-center py-3">Show All Notification</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="d-flex border items-center gap-2 justify-content-between p-0 px-2 border-user-auth">
                                <div>
                                    <img src={UserCircle} alt="" className='user-profile-auth' />
                                </div>

                                <div className="nav-item dropdown no-arrow">
                                    <a href="/user/dashboard/dashboarduser" className='nav-link px-0 text-secondary' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hi, {name}</a>
                                    <ul className="dropdown-menu " style={{ marginTop: "-5px", marginLeft: "-100px" }} aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#/user/dashboard/dashboarduser">
                                                <div>
                                                    <div className="small text-gray-500">Dashboard</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#/user/dashboard/profile">
                                                <div>
                                                    <div className="small text-gray-500">Profil</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="/#/login">
                                                <div>
                                                    <div onClick={handleLogout} className="small text-gray-500">Logout</div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
