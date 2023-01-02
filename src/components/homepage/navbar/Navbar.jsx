import React, { useState, useEffect } from 'react';
import { redirect, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-use-history'
import { Link } from 'react-router-dom';
import NavList from './NavList';
import UserCircle from '../../../assets/homepage/user-circle.png';
import Logo from '../../../assets/homepage/Logo.png';
import Bell from '../../../assets/homepage/bell.png';
import { API } from '../../../services';
import moment from 'moment';
import { io } from 'socket.io-client';

export default function Navbar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const history = useHistory();

    const [notifications, setNotifications] = useState([]);
    const [count, setcount] = useState(0);
    const [userId, setUserId] = useState('');
    const [parseNotif, setParseNotif] = useState([]);

    const [name, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [admin, setAdmin] = useState(false);
    const [login, setLogin] = useState(false);

    const token = localStorage.getItem("token");

    if (token) {
        useEffect(() => {
            fetch(`${import.meta.env.VITE_BASE_URL}/v1/whoami`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    data.roleId === 1 && setAdmin(true);
                    // setUser(data.data.user);
                    setUsername(data.name);
                    setImage(data.image);
                });

            if (!token) {
                setLogin(false)
            } else {
                setLogin(true)
            }
        }, []);
    }

    // notificaiton | socket.io
    if (location == '/' || location == `/search/flight/${id}` || location == `/search/flight/payment/${id}` && token) {
        const socket = io(`${import.meta.env.VITE_BASE_URL}`);

        useEffect(() => {
            if (admin) {
                API.adminNotifications().then((notif) => {
                    const notifs = notif.filter((notifs) => notifs.isRead == false)
                    setParseNotif(notifs.reverse())
                })
            } else {
                API.userNotifications().then((notif) => {
                    const notifs = notif.filter((notifs) => notifs.isRead == false)
                    setParseNotif(notifs.reverse())
                })
            }

        }, [])

        useEffect(() => {
            API.whoAmI().then((user) => {
                setUserId(user.id.toString());
            })

            socket.on('connect', () => {
                console.log('connected');
            });

            if (admin) {
                socket.emit('connected', 'admin');
            } else {
                socket.emit('connected', userId);
            }
        }, [count, notifications]);

        if (admin) {
            socket.on('notif-to-admin', (newNotif) => {
                setcount(count + 1);
                setNotifications([newNotif, ...notifications]);
            });
        } else {
            socket.on('notif-to-user', (newNotif) => {
                setcount(count + 1);
                setNotifications([newNotif, ...notifications]);
            });
        }
    }

    console.log(count);
    console.log(parseNotif);

    const updateReadHandler = (id, message, bookingId) => {
        API.updateNotifications(id).then((notif) => console.log(notif));

        if (admin) {
            API.transactionsGet().then((transactions) => {
                const transaction = transactions.filter((t) => t.bookingId == bookingId);
                navigate(`/transaction/${transaction[0].id}`);
            })
        } else {
            if (message == 'Waiting for payment') {
                navigate(`/search/flight/payment/${bookingId}`);
            } else {
                navigate(`/user/dashboard/notification/${bookingId}`);
            }
        }
    };
    // notificaiton | socket.io

    const onLogoutHandler = () => {
        localStorage.removeItem('token');
        navigate('/login')

        setTimeout(() => {
            window.location.reload();
        }, 300);
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
                    {location === "/" &&
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#booking">My Bookings</a>
                            <a className="nav-link" href="#service">services</a>
                            <a className="nav-link" href="#contact">Contact us</a>
                        </div>}
                    {location !== '/' && <div className="navbar-nav ms-auto"></div>}
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
                                        {count != 0 &&
                                            <div className='notif-count'>{count}</div>}
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li className='dropdown-header mb-2'>
                                            <a className="dropdown-item large text-center fs-6" href="#">Notification</a>
                                        </li>
                                        {parseNotif.slice(0, 5).map((notif) => (
                                            <>
                                                <li>
                                                    <hr className="dropdown-divider m-0" />
                                                </li>
                                                <li onClick={() => updateReadHandler(notif.id, notif.message, notif.bookingId)}>
                                                    <a className={`dropdown-item d-flex align-items-center py-3 unread ${notif.isRead && 'read text-muted'}`} href="#">
                                                        <div className='d-flex flex-column gap-2'>
                                                            <span className="font-weight-bold">{notif.message}</span>
                                                            <div className="small text-gray-500">{moment(notif.updatedAt).format('LLLL')}</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </>
                                        ))}
                                        <li>
                                            <hr className="dropdown-divider m-0" />
                                        </li>
                                        {admin ?
                                            <li>
                                                <Link to={'/dashboard/notification'} className="dropdown-item small text-center py-3">Show All Notification</Link>
                                            </li> :
                                            <li>
                                                <Link to={'/user/dashboard/notification'} className="dropdown-item small text-center py-3">Show All Notification</Link>
                                            </li>}
                                    </ul>

                                </div>
                            </div>
                            <div className="d-flex border items-center gap-2 justify-content-between p-0 px-2 border-user-auth">
                                <div>
                                    <img src={UserCircle} alt="" className='user-profile-auth' />
                                </div>

                                <div className="nav-item dropdown no-arrow">
                                    <a href="/user/dashboard/dashboarduser" className='nav-link px-0 text-secondary' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hi, {name}</a>
                                    <ul className="dropdown-menu home-page" style={{ marginTop: "-5px", marginLeft: "-100px" }} aria-labelledby="navbarDropdown">
                                        {admin ? <li>
                                            <Link className="dropdown-item d-flex align-items-center" to={'/dashboard'}>
                                                <div>
                                                    <div className="small text-gray-500">Dashboard</div>
                                                </div>
                                            </Link>
                                        </li> :
                                            <>
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
                                            </>}
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <div className="logout dropdown-item d-flex align-items-center" onClick={() => onLogoutHandler()}>
                                                <div>
                                                    <div className="small text-gray-500">Logout</div>
                                                </div>
                                            </div>
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
