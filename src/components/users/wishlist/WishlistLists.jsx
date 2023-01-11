import { ArrowCircleLeft2 } from 'iconsax-react';
import ReactLoading from 'react-loading';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Garuda from '../../../assets/dasboard-admin/garuda.svg';
import Line from '../../../assets/dasboard-admin/line.svg';
import { API } from '../../../services';
import NotFound from '../../notfound/NotFound';

export default function WishlistList() {
    const [show, setShow] = useState(false);
    const [flights, setFlight] = useState([]);

    useEffect(() => {
        API.wishlists().then((flight) => {
            flight && setFlight(flight);
        });
    }, [])

    setTimeout(() => {
        setShow(true);
    }, 1000);

    return (
        <div>
            {show && (
                <div className='container-fluid pb-5'>
                    <div className='admin-content px-lg-2'>

                        {/* header label */}
                        <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
                            <h2 className='fs-4'>Wishlist</h2>
                            <p className='header-text fw-light col-12 col-lg-9 p-0'>This is a list of your favorite flights</p>
                        </div>

                        {/* broadcrumb */}
                        <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                            <Link to={'/user/dashboard/wishlist'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
                                <ArrowCircleLeft2 size={20} className="arrow-left" />
                                <div className='label'>Wishlist</div>
                            </Link>
                        </div>


                        {/* <div className="opsi-filter">
                    <a className="btn btn-departure"><span>Departure Date</span></a>
                    <a className="btn btn-booking"><span>Booking Type</span></a>
                    <a className="btn btn-date"><span>Date Range</span></a>
                </div> */}

                        {flights.length === 0 ?
                            <ReactLoading type={'bars'} color={'silver'} height={'10%'} width={'10%'} className="mt-5 m-auto" /> :
                            <div className="list-ticket card mt-3 p-3">
                                <table className="table table-ticket m-0">
                                    <thead>
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
                                        {flights.map((flight) => (
                                            <tr>
                                                <td data-label="Airlines" className="airlines">
                                                    <img src={flight.Airline.image} alt="Airplanes" /><br className="d-none" />
                                                    <span>{flight.Airline.name}</span>
                                                </td>
                                                <td data-label="From" className="departure-from">
                                                    <p className="departure-time">08:05</p>
                                                    <span className="from-flight">{flight.departureAirport.city}</span>
                                                </td>
                                                <td className="line-flight">
                                                    <img src={Line} alt="" />
                                                </td>
                                                <td data-label="To" className="arrival-to">
                                                    <p className="arrival-time">09:50</p>
                                                    <span className="to-flight">{flight.arrivalAirport.city}</span>
                                                </td>
                                                <td data-label="Duration" className="duration">
                                                    <p className="duration-flight">1h 45m</p>
                                                    <span className="type-direct">Direct</span>
                                                </td>
                                                <td data-label="Date" className="departure-date">01 Dec 2022</td>
                                                <td data-label="Action" className="action">
                                                    <Link to={`/search/flight/${flight.id}`} className="detail">
                                                        <p className='text-decoration-none text-white bg-primary p-2 rounded-3'>Detail</p>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>}
                    </div>
                </div>
            )}
        </div>
    );
}
