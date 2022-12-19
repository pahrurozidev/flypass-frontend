import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavList from './NavList';
import UserCircle from '../../../assets/homepage/user-circle.png';
import Logo from '../../../assets/homepage/Logo.png';
import Bell from '../../../assets/homepage/bell.png';

export default function Navbar() {
    const location = useLocation().pathname;

    const [name, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [token, setToken] = useState('');
    const [login, setLogin] = useState(false)
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
                console.log(data);
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
    }, []);

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
                            <div className='bell'>
                                {(location === '/') &&
                                    <a href="#/login"><img src={Bell} alt="bell icon" /></a>}
                            </div>
                            <div className="navbar-nav user ms-4">
                                <img src={UserCircle} className="nav-link user-image" alt="" />
                                <Link to={'/login'} className="nav-link px-0 mt-1">Login</Link>
                                <a className="nav-link px-0 mt-1 slash">/</a>
                                <Link to={'/register'} className="nav-link px-0 mt-1 register">Register</Link>
                            </div>
                        </div>

                    ) : (
                        <div>
                            <div className='bell'>
                                <div className="nav-item dropdown no-arrow">
                                    <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Bell} alt="bell icon" />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li className='dropdown-header' >
                                            <a className="dropdown-item large text-center" href="#">Notification Center</a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div>
                                                    <div className="small text-gray-500">December 12, 2019</div>
                                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div>
                                                    <div className="small text-gray-500">December 12, 2019</div>
                                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <div>
                                                    <div className="small text-gray-500">December 12, 2019</div>
                                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item small text-center" href="/#/user/dashboard/notifuser">Show All Notification</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="navbar-nav user ms-4">
                                <a href="/#/user/dashboard/dashboarduser"><img src={image} className="rounded-circle" style={{ marginRight: "8px" }} width={"50px"} alt="" /></a>
                                <Link to={'/user/dashboard/dashboarduser'} className="nav-link px-0 mt-1">{name}</Link>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </nav>
    );
}
