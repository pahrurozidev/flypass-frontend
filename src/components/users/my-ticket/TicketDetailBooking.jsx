import React, { Component, Fragment, useState, useEffect } from "react";
import Garuda from '../../../assets/dasboard-admin/garuda.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import Putih from '../../../assets/dasboard-admin/putih.png';
import axios from "axios";


export default function Card() {

    const [allBookings, setAllBookings] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get('https://flypass-api.up.railway.app/v1/bookings', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setAllBookings(res.data.booking);
        })
    }, []);

    console.log(allBookings);

    return (
        <div className="container-fluid position-relative">
            <h1 className="title-dashboard">Dashboard</h1>
            <div className="container my-ticket p-0 ms-0">
                <div className="title-ticket d-flex flex-row align-items-center">
                    <a href="#/user/dashboard/dashboarduser"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg></a>
                    <h5 className="breadcrumb-detail ms-3">Booking List /</h5><span className="mb-0 next-breadcrumb">&nbsp;Detail Ticket</span>
                </div>
                <div className="container e-ticket p-0">
                    <div className="card-e-ticket">
                    {allBookings.map((booking) => (
                            <div className="card" key={booking.id}>
                                <div className="blue-top">
                                    <FontAwesomeIcon icon={faPlane} />
                                    <span>E-TICKET</span>
                                </div>
                                <div className="card-body d-flex flex-row align-items-center">
                                    <div className="line-vertical"></div>
                                    <div className="row e-ticket-detail flex-row justify-content-between m-0">
                                        <div className="col-lg-8 ticket-left p-0">
                                            <div className="frame-top d-flex flex-row align-items-center">
                                                <img src={booking.flight1.Airlane.image} alt="Airplanes" />
                                                <h6 className="name-plane">{booking.flight1.Airlane.name}</h6>
                                                <div className="divider-plane"></div>
                                                <span className="classes">{booking.flight1.FlightClass.name}</span>
                                            </div>
                                            <div className="frame-bottom d-flex flex-row">
                                                <div className="depart-frame col-lg-5 d-flex flex-column justify-content-between">
                                                    <div className="country-depart">
                                                        <h1>Depart</h1>
                                                        <span>{booking.flight1.departureAirport.city}</span>
                                                    </div>
                                                    <div className="time-depart">
                                                        <span>{booking.flight1.departureAirport.Airlane.iata}</span>
                                                        <p>{booking.flight1.departureDate} - {booking.flight1.departureTime}</p>
                                                    </div>
                                                </div>
                                                <FontAwesomeIcon icon={faPlane} className="col-lg-2" />
                                                <div className="arrive-frame col-lg-5 d-flex flex-column justify-content-between">
                                                    <div className="country-arrive">
                                                        <h1>Arrive</h1>
                                                        <span>{booking.flight1.arrivalAirport.city}</span>
                                                    </div>
                                                    <div className="time-arrive">
                                                        <span>{booking.flight1.arrivalAirport.Airlane.iata}</span>
                                                        <p>{booking.flight1.arrivalDate} - {booking.flight1.arrivalTime}</p>
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
                                                        <span>{booking.Passenger.firstName}</span>
                                                    </div>
                                                    <div className="type-passenger col-6 d-flex flex-column text-end">
                                                        <span className="title">Type</span>
                                                        <span>{booking.Passenger.identityType}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
