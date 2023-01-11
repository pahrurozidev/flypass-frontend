import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import Garuda from '../../../assets/dasboard-admin/garuda.svg';
import Line from '../../../assets/dasboard-admin/line.svg';
import { ArrowCircleLeft2 } from 'iconsax-react';
import NotFound from '../../notfound/NotFound'


export default function Card() {

    const [allBookings, setAllBookings] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(`${import.meta.env.VITE_BASE_URL}/v1/bookings`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            const bookings = res.data.booking.filter((book) => book.BookingStatus.name !== 'Waiting for payment');
            setAllBookings(bookings);
        })

    }, []);

    console.log(allBookings);

    return (
        <div>
            <div className='container-fluid pb-5'>
                <div className='admin-content px-lg-2'>

                    {/* header label */}
                    <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
                        <h2 className='fs-4'>My Ticket</h2>
                        <p className='header-text fw-light col-12 col-lg-9 p-0'>Halaman ini menampilkan list tiket yang telah di pesan.</p>
                    </div>

                    {/* broadcrumb */}
                    <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                        <Link to={'/user/dashboard/dashboarduser'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
                            <ArrowCircleLeft2 size={20} />
                            <div className='label'>List Ticket</div>
                        </Link>
                    </div>
                    {allBookings.length !== 0 &&
                        <div className="card booking-table mt-3 pb-5">
                            <table className="table mb-3">
                                <thead className='border-bottom'>
                                    <tr>
                                        <th>Airlines</th>
                                        <th>From</th>
                                        <th> </th>
                                        <th>To</th>
                                        <th>Duration</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allBookings.map((booking) => (
                                        <tr key={booking.id}>
                                            <td data-title="Airlines" className="airlines">
                                                <img src={Garuda} alt="Airplanes" /><br className="d-none" />
                                                <span>{booking.flight1.Airline.name}</span>
                                            </td>
                                            <td data-title="From" className="departure-from">
                                                <p className="departure-time">{booking.flight1.departureTime.slice(0, -3)}</p>
                                                <span className="from-flight">{booking.flight1.departureAirport.city}</span>
                                            </td>
                                            <td className="line-flight">
                                                <img src={Line} alt="" />
                                            </td>
                                            <td data-title="To" className="arrival-to">
                                                <p className="arrival-time">{booking.flight1.arrivalTime.slice(0, -3)}</p>
                                                <span className="to-flight">{booking.flight1.arrivalAirport.city}</span>
                                            </td>
                                            <td data-title="Duration" className="duration">
                                                <p className="duration-flight">{booking.flight1.duration.slice(0, -3)}</p>
                                                <span className="type-direct">{booking.flight1.FlightClass.name}</span>
                                            </td>
                                            <td data-title="Date" className="departure-date">{booking.flight1.departureDate}</td>
                                            <td data-label="Action" className="action">
                                                <Link to={`/user/dashboard/ticket/${booking.id}`} className="detail">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                    </svg>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>}
                    {allBookings == 0 && <ReactLoading type={'bars'} color={'silver'} height={'10%'} width={'10%'} className="mt-5 m-auto" />}
                </div>
            </div>

        </div>

        // <div className="container-fluid position-relative">
        //     <h1 className="title-dashboard">My Ticket</h1>
        //     <div className="container my-ticket p-0 ms-0">
        //         <div className="title-ticket d-flex flex-row align-items-center">
        //             <h5>Tikcet List</h5>
        //         </div>
        //         <div className="opsi-filter">
        //             <a className="btn btn-departure"><span>Departure Date</span></a>
        //             <a className="btn btn-booking"><span>Booking Type</span></a>
        //             <a className="btn btn-date"><span>Date Range</span></a>
        //         </div>
        //         <div className="container list-ticket p-0">
        //             <table className="table table-ticket">
        //                 <thead>
        //                     <tr>
        //                         <th>Airlines</th>
        //                         <th>From</th>
        //                         <th> </th>
        //                         <th>To</th>
        //                         <th>Duration</th>
        //                         <th>Date</th>
        //                         <th>Action</th>
        //                     </tr>
        //                 </thead>
        //                     <tbody>
        //                         {allBookings.map((booking) => (
        //                             <tr key={booking.id}>
        //                             <td data-label="Airlines" className="airlines">
        //                                 <img src={booking.flight1.Airlane.image} alt="Airplanes" /><br className="d-none" />
        //                                 <span>{booking.flight1.Airlane.name}</span>
        //                             </td>
        //                             <td data-label="From" className="departure-from">
        //                                 <p className="departure-time">{booking.flight1.departureTime}</p>
        //                                 <span className="from-flight">{booking.flight1.departureAirport.city}</span>
        //                             </td>
        //                             <td className="line-flight">
        //                                 <img src={Line} alt="" />
        //                             </td>
        //                             <td data-label="To" className="arrival-to">
        //                                 <p className="arrival-time">{booking.flight1.arrivalTime}</p>
        //                                 <span className="to-flight">{booking.flight1.arrivalAirport.city}</span>
        //                             </td>
        //                             <td data-label="Duration" className="duration">
        //                                 <p className="duration-flight">{booking.flight1.duration}</p>
        //                                 <span className="type-direct">Direct</span>
        //                             </td>
        //                             <td data-label="Date" className="departure-date">{booking.flight1.departureDate}</td>
        //                             <td data-label="Action" className="action">
        //                                 <Link to={`/user/dashboard/ticket/1`} className="detail">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
        //                                         <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
        //                                         <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
        //                                     </svg>
        //                                 </Link>
        //                             </td>
        //                         </tr>
        //                         ))}                            
        //                     </tbody>

        //             </table>
        //         </div>
        //     </div>
        // </div>
    );
}
