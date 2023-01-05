import React, { Component, Fragment, useState, useEffect } from "react";
import Garuda from '../../../assets/dasboard-admin/garuda.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { ArrowCircleLeft2 } from 'iconsax-react';
import { API } from "../../../services";


export default function Card() {

    const { id } = useParams();
    const [name, setUsername] = useState('');
    const [booking, setBooking] = useState([]);
    const [load, setLoad] = useState(false);

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
    }, []);

    useEffect(() => {
        API.getBookByUserLogin().then((bookings) => {
            const book = bookings.filter((book) => book.id == id);
            setBooking(book);
            setLoad(true);
        })
    }, []);

    return (
        <div>
            {load &&
                <>
                    <div className='container-fluid pb-5'>
                        <div className='admin-content px-lg-2'>

                            {/* header label */}
                            <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
                                <h2 className='fs-4'>Selamat Datang, {name}</h2>
                                <p className='header-text fw-light col-12 col-lg-9'>Halaman ini menampilkan detail tiket sesuai dengan pesananmu.</p>
                            </div>

                            {/* broadcrumb */}
                            <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                                <Link to={'/user/dashboard/dashboarduser'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
                                    <ArrowCircleLeft2 size={20} />
                                    <div className='label'>All Bookings / Ticket Detail</div>
                                </Link>
                            </div>

                            {/* ticket detail */}
                            <div className="card p-2 p-md-3 mt-3">
                                <div className="e-ticket">
                                    {/* departure flight */}
                                    <div className="card-e-ticket">
                                        <div className="card" key={booking[0].id}>
                                            <div className="blue-top">
                                                <FontAwesomeIcon icon={faPlane} />
                                                <span>E-TICKET</span>
                                            </div>
                                            <div className="card-body d-flex flex-row align-items-center">
                                                <div className="line-vertical"></div>
                                                <div className="row e-ticket-detail flex-row justify-content-between m-0">
                                                    <div className="col-lg-8 ticket-left p-0">
                                                        <div className="frame-top d-flex flex-row align-items-center">
                                                            <img src={booking[0].flight1.Airline.image} alt="Airplanes" />
                                                            <h6 className="name-plane">{booking[0].flight1.Airline.name}</h6>
                                                            <div className="divider-plane"></div>
                                                            <span className="classes">{booking[0].flight1.FlightClass.name}</span>
                                                        </div>
                                                        <div className="frame-bottom d-flex flex-row">
                                                            <div className="depart-frame col-lg-5 d-flex flex-column justify-content-between">
                                                                <div className="country-depart">
                                                                    <h1>{booking[0].flight1.departureAirport.iata}</h1>
                                                                    <span>{booking[0].flight1.departureAirport.city}</span>
                                                                </div>
                                                                <div className="time-depart">
                                                                    <span>Depart</span>
                                                                    <p>{booking[0].flight1.departureDate} - {booking[0].flight1.departureTime.slice(0, -3)}</p>
                                                                </div>
                                                            </div>
                                                            <FontAwesomeIcon icon={faPlane} className="col-lg-2" />
                                                            <div className="arrive-frame col-lg-5 d-flex flex-column justify-content-between">
                                                                <div className="country-arrive">
                                                                    <h1>{booking[0].flight1.arrivalAirport.iata}</h1>
                                                                    <span>{booking[0].flight1.arrivalAirport.city}</span>
                                                                </div>
                                                                <div className="time-arrive">
                                                                    <span>Arrive</span>
                                                                    <p>{booking[0].flight1.arrivalDate} - {booking[0].flight1.arrivalTime.slice(0, -3)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 ticket-right p-0">
                                                        <div className="text-white ticket-lable rounded text-center py-1">Departure</div>
                                                        <div className="ticket-right-top d-flex flex-column mt-2">
                                                            <span>Booking Code</span>
                                                            <span>{booking[0].bookingCode}</span>
                                                        </div>
                                                        <div className="ticket-right-bottom d-flex flex-column">
                                                            <span>Passenger Info :</span>
                                                            <div className="title-passenger-info d-flex flex-row justify-content-between">
                                                                <div className="name-passenger col-6 d-flex flex-column">
                                                                    <span className="title">Name</span>
                                                                    <span>{booking[0].PassengerContact.firstName}</span>
                                                                </div>
                                                                <div className="type-passenger col-6 d-flex flex-column text-end">
                                                                    <span className="title">Title</span>
                                                                    <span>{booking[0].PassengerContact.title}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* return flight */}
                                    {JSON.stringify(booking[0].flight2) !== 'null' &&
                                        <div className="card-e-ticket mt-3">
                                            <div className="card" key={booking[0].id}>
                                                <div className="blue-top">
                                                    <FontAwesomeIcon icon={faPlane} />
                                                    <span>E-TICKET</span>
                                                </div>
                                                <div className="card-body d-flex flex-row align-items-center">
                                                    <div className="line-vertical"></div>
                                                    <div className="row e-ticket-detail flex-row justify-content-between m-0">
                                                        <div className="col-lg-8 ticket-left p-0">
                                                            <div className="frame-top d-flex flex-row align-items-center">
                                                                <img src={booking[0].flight2.Airline.image} alt="Airplanes" />
                                                                <h6 className="name-plane">{booking[0].flight2.Airline.name}</h6>
                                                                <div className="divider-plane"></div>
                                                                <span className="classes">{booking[0].flight2.FlightClass.name}</span>
                                                            </div>
                                                            <div className="frame-bottom d-flex flex-row">
                                                                <div className="depart-frame col-lg-5 d-flex flex-column justify-content-between">
                                                                    <div className="country-depart">
                                                                        <h1>{booking[0].flight2.departureAirport.iata}</h1>
                                                                        <span>{booking[0].flight2.departureAirport.city}</span>
                                                                    </div>
                                                                    <div className="time-depart">
                                                                        <span>Depart</span>
                                                                        <p>{booking[0].flight2.departureDate} - {booking[0].flight2.departureTime.slice(0, -3)}</p>
                                                                    </div>
                                                                </div>
                                                                <FontAwesomeIcon icon={faPlane} className="col-lg-2" />
                                                                <div className="arrive-frame col-lg-5 d-flex flex-column justify-content-between">
                                                                    <div className="country-arrive">
                                                                        <h1>{booking[0].flight2.arrivalAirport.iata}</h1>
                                                                        <span>{booking[0].flight2.arrivalAirport.city}</span>
                                                                    </div>
                                                                    <div className="time-arrive">
                                                                        <span>Arrive</span>
                                                                        <p>{booking[0].flight2.arrivalDate} - {booking[0].flight2.arrivalTime.slice(0, -3)}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 ticket-right p-0">
                                                            <div className="text-white ticket-lable rounded text-center py-1">Return</div>
                                                            <div className="ticket-right-top d-flex flex-column mt-2">
                                                                <span>Booking Code</span>
                                                                <span>{booking[0].bookingCode}</span>
                                                            </div>
                                                            <div className="ticket-right-bottom d-flex flex-column">
                                                                <span>Passenger Info :</span>
                                                                <div className="title-passenger-info d-flex flex-row justify-content-between">
                                                                    <div className="name-passenger col-6 d-flex flex-column">
                                                                        <span className="title">Name</span>
                                                                        <span>{booking[0].PassengerContact.firstName}</span>
                                                                    </div>
                                                                    <div className="type-passenger col-6 d-flex flex-column text-end">
                                                                        <span className="title">Title</span>
                                                                        <span>{booking[0].PassengerContact.title}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
        </div>

    );
}
