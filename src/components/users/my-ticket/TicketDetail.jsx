import React, { Component, Fragment, useState, useEffect } from "react";
import Garuda from '../../../assets/dasboard-admin/garuda.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import Putih from '../../../assets/dasboard-admin/putih.png';


export default function Card() {

    const [name, setUsername] = useState('');
    const [token, setToken] = useState('');

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
                setUsername(data.name);
            });
    }, []);

    const [departureAirport, setDepartureAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [duration, setDuration] = useState('');
    const [airlineName, setAirlineName] = useState('');
    const [airlineImage, setAirlineImage] = useState('');
    const [flightclassId, setFlightclassId] = useState('');
    const [bookingCode, setBookingCode] = useState('');
    const [bookings, setBookings] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch(`https://flypass-api.up.railway.app/v1/bookings`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem("bookings", data.booking.length)
                setAirlineImage(data.airlineImage);
                setAirlineName(data.airlaneName);
                setDepartureTime(data.departureTime);
                setDepartureAirport(data.departureAirport);
                setArrivalTime(data.arrivalTime);
                setArrivalDate(data.arrivalDate);
                setArrivalAirport(data.arrivalAirport);
                setDuration(data.duration);
                setDepartureDate(data.departureDate);
                setFlightclassId(data.flightclassId);
            });
    }, []);

    useEffect(() => {
        const bookings = localStorage.getItem("bookings");
        if (bookings == 0) {
            setBookings(false)
        } else {
            setBookings(true)
        }
    }, []);

    return (
        <div className="container-fluid position-relative">
            <h1 className="title-dashboard">My Ticket</h1>
            <div className="container my-ticket p-0 ms-0">
                <div className="title-ticket d-flex flex-row align-items-center">
                    <a href="#/user/dashboard/ticket"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg></a>
                    <h5 className="breadcrumb-detail ms-3">Tikcet List /</h5><span className="mb-0 next-breadcrumb">&nbsp;Detail Ticket</span>
                </div>
                <div className="container e-ticket p-0">
                    <div className="card-e-ticket">
                        <div className="card">
                            <div className="blue-top">
                                <FontAwesomeIcon icon={faPlane} />
                                <span>E-TICKET</span>
                            </div>
                            {bookings == 0 ? (
                                <div className="card-body d-flex flex-row align-items-center">
                                    <div className="line-vertical"></div>
                                    <div className="row e-ticket-detail flex-row justify-content-between m-0">
                                        <div className="col-lg-8 ticket-left p-0">
                                            <div className="frame-top d-flex flex-row align-items-center">
                                                <img src={Putih} alt="Airplanes" />
                                                <h6 className="name-plane">Tiket Anda Saai Ini Masih Kosong</h6>
                                                <span className="classes"></span>
                                            </div>
                                            <div className="frame-bottom d-flex flex-row">
                                                <div className="depart-frame col-lg-5 d-flex flex-column justify-content-between">
                                                    <div className="country-depart">
                                                        <h1></h1>
                                                        <span></span>
                                                    </div>
                                                    <div className="time-depart">
                                                        <span></span>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <FontAwesomeIcon icon={Putih} className="col-lg-2" />
                                                <div className="arrive-frame col-lg-5 d-flex flex-column justify-content-between">
                                                    <div className="country-arrive">
                                                        <h1></h1>
                                                        <span></span>
                                                    </div>
                                                    <div className="time-arrive">
                                                        <span></span>
                                                        <p></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 ticket-right p-0">
                                            <div className="ticket-right-top d-flex flex-column">
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <div className="ticket-right-bottom d-flex flex-column">
                                                <span></span>
                                                <div className="title-passenger-info d-flex flex-row justify-content-between">
                                                    <div className="name-passenger col-6 d-flex flex-column">
                                                        <span className="title"></span>
                                                        <span></span>
                                                    </div>
                                                    <div className="type-passenger col-6 d-flex flex-column text-end">
                                                        <span className="title"></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="card-body d-flex flex-row align-items-center">
                                    <div className="line-vertical"></div>
                                    <div className="row e-ticket-detail flex-row justify-content-between m-0">
                                        <div className="col-lg-8 ticket-left p-0">
                                            <div className="frame-top d-flex flex-row align-items-center">
                                                <img src={airlineImage} alt="Airplanes" />
                                                <h6 className="name-plane">{airlineName}</h6>
                                                <div className="divider-plane"></div>
                                                <span className="classes">{flightclassId}</span>
                                            </div>
                                            <div className="frame-bottom d-flex flex-row">
                                                <div className="depart-frame col-lg-5 d-flex flex-column justify-content-between">
                                                    <div className="country-depart">
                                                        <h1>CGK</h1>
                                                        <span>{departureAirport}</span>
                                                    </div>
                                                    <div className="time-depart">
                                                        <span>Depart</span>
                                                        <p>{departureDate} - {departureTime}</p>
                                                    </div>
                                                </div>
                                                <FontAwesomeIcon icon={faPlane} className="col-lg-2" />
                                                <div className="arrive-frame col-lg-5 d-flex flex-column justify-content-between">
                                                    <div className="country-arrive">
                                                        <h1>SIN</h1>
                                                        <span>{arrivalAirport}</span>
                                                    </div>
                                                    <div className="time-arrive">
                                                        <span>Arrive</span>
                                                        <p>{arrivalDate} - {arrivalTime}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 ticket-right p-0">
                                            <div className="ticket-right-top d-flex flex-column">
                                                <span>Booking Code</span>
                                                <span>{bookingCode}</span>
                                            </div>
                                            <div className="ticket-right-bottom d-flex flex-column">
                                                <span>Passenger Info :</span>
                                                <div className="title-passenger-info d-flex flex-row justify-content-between">
                                                    <div className="name-passenger col-6 d-flex flex-column">
                                                        <span className="title">Name</span>
                                                        <span>{name}</span>
                                                    </div>
                                                    <div className="type-passenger col-6 d-flex flex-column text-end">
                                                        <span className="title">Type</span>
                                                        <span>Adult</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
