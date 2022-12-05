import React from 'react';
import Garuda from '../../../../assets/dasboard-admin/garuda.svg';
import Line from '../../../../assets/dasboard-admin/line.svg';

export default function ListBooking() {
    return (
        <>
            <h5>All Bookings</h5>
            <div className="opsi-filter">
                <a className="btn btn-departure"><span>Departure Date</span></a>
                <a className="btn btn-booking"><span>Booking Type</span></a>
                <a className="btn btn-date"><span>Date Range</span></a>
            </div>
            <div className="container list-booking p-0">
                <table className="table">
                    <thead>
                        <th>Airlines</th>
                        <th>From</th>
                        <th> </th>
                        <th>To</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>People</th>
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
                            <td data-label="People" className="people">5</td>
                        </tr>
                        <tr>
                            <td data-label="Airlines" className="airlines">
                                <img src={Garuda} alt="Airplanes" /><br className="d-none" />
                                <span>Garuda Indonesia</span>
                            </td>
                            <td data-label="From" className="departure-from">
                                <p className="departure-time">10:05</p>
                                <span className="from-flight">Jakarta</span>
                            </td>
                            <td data-label=" " className="line-flight">
                                <img src={Line} alt="" />
                            </td>
                            <td data-label="To" className="arrival-to">
                                <p className="arrival-time">11:50</p>
                                <span className="to-flight">Singapore</span>
                            </td>
                            <td data-label="Duration" className="duration">
                                <p className="duration-flight">1h 45m</p>
                                <span className="type-direct">Direct</span>
                            </td>
                            <td data-label="Date" className="departure-date">01 Dec 2022</td>
                            <td data-label="People" className="people">5</td>
                        </tr>
                        <tr>
                            <td data-label="Airlines" className="airlines">
                                <img src={Garuda} alt="Airplanes" /><br className="d-none" />
                                <span>Garuda Indonesia</span>
                            </td>
                            <td data-label="From" className="departure-from">
                                <p className="departure-time">14:10</p>
                                <span className="from-flight">Jakarta</span>
                            </td>
                            <td data-label=" " className="line-flight">
                                <img src={Line} alt="" />
                            </td>
                            <td data-label="To" className="arrival-to">
                                <p className="arrival-time">15:55</p>
                                <span className="to-flight">Singapore</span>
                            </td>
                            <td data-label="Duration" className="duration">
                                <p className="duration-flight">1h 45m</p>
                                <span className="type-direct">Direct</span>
                            </td>
                            <td data-label="Date" className="departure-date">01 Dec 2022</td>
                            <td data-label="People" className="people">5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
