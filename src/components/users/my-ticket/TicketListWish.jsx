import React from 'react';
import { Link } from 'react-router-dom';
import Garuda from '../../../assets/dasboard-admin/garuda.svg';
import Line from '../../../assets/dasboard-admin/line.svg';

export default function Card() {
    return (
        <div className="container-fluid position-relative">
            <h1 className="title-dashboard">Wish List</h1>
            <div className="container my-ticket p-0 ms-0">
                <div className="title-ticket d-flex flex-row align-items-center">
                    <h5>This is a list of your favorite tickets</h5>
                </div>
                <div className="opsi-filter">
                    <a className="btn btn-departure"><span>Departure Date</span></a>
                    <a className="btn btn-booking"><span>Booking Type</span></a>
                    <a className="btn btn-date"><span>Date Range</span></a>
                </div>
                <div className="container list-ticket p-0">
                    <table className="table table-ticket">
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
                            <tr>
                                <td data-label="Airlines" className="airlines">
                                    <img src={Garuda} alt="Airplanes" /><br className="d-none" />
                                    <span>Garuda Indonesia</span>
                                </td>
                                <td data-label="From" className="departure-from">
                                    <p className="departure-time">08:05</p>
                                    <span className="from-flight">Jakarta</span>
                                </td>
                                <td className="line-flight">
                                    <img src={Line} alt="" />
                                </td>
                                <td data-label="To" className="arrival-to">
                                    <p className="arrival-time">09:50</p>
                                    <span className="to-flight">Singapore</span>
                                </td>
                                <td data-label="Duration" className="duration">
                                    <p className="duration-flight">1h 45m</p>
                                    <span className="type-direct">Direct</span>
                                </td>
                                <td data-label="Date" className="departure-date">01 Dec 2022</td>
                                <td data-label="Action" className="action">
                                    <Link to={`/user/dashboard/wishlist/1`} className="detail">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
