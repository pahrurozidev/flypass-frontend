import React from 'react';
import Garuda from '../../../../assets/dasboard-admin/garuda.svg';
import Line from '../../../../assets/dasboard-admin/line.svg';

export default function ListBooking() {
    return (
        <>
            {/* header */}
            <div className="card p-3 pb-2 border-bottom-0 rounded-0">
                <h5>All Bookings</h5>
            </div>

            <div className="card p-3 border-top-0">
                <div className="opsi-filter">
                    <a className="btn btn-departure"><span>Departure Date</span></a>
                    <a className="btn btn-booking"><span>Booking Type</span></a>
                    <a className="btn btn-date"><span>Date Range</span></a>
                </div>
            </div>

            <div className="card booking-table mt-3">
                <table className="table">
                    <thead className='border-bottom'>
                        <tr>
                            <th>Airlines</th>
                            <th>From</th>
                            <th> </th>
                            <th>To</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>People</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-title="Airlines" className="airlines">
                                <img src={Garuda} alt="Airplanes" /><br className="d-none" />
                                <span>Garuda Indonesia</span>
                            </td>
                            <td data-title="From" className="departure-from">
                                <p className="departure-time">08:05</p>
                                <span className="from-flight">Jakarta</span>
                            </td>
                            <td className="line-flight">
                                <img src={Line} alt="" />
                            </td>
                            <td data-title="To" className="arrival-to">
                                <p className="arrival-time">09:50</p>
                                <span className="to-flight">Singapore</span>
                            </td>
                            <td data-title="Duration" className="duration">
                                <p className="duration-flight">1h 45m</p>
                                <span className="type-direct">Direct</span>
                            </td>
                            <td data-title="Date" className="departure-date">01 Dec 2022</td>
                            <td data-title="People" className="people">5</td>
                        </tr>
                        <tr>
                            <td data-title="Airlines" className="airlines">
                                <img src={Garuda} alt="Airplanes" /><br className="d-none" />
                                <span>Garuda Indonesia</span>
                            </td>
                            <td data-title="From" className="departure-from">
                                <p className="departure-time">08:05</p>
                                <span className="from-flight">Jakarta</span>
                            </td>
                            <td className="line-flight">
                                <img src={Line} alt="" />
                            </td>
                            <td data-title="To" className="arrival-to">
                                <p className="arrival-time">09:50</p>
                                <span className="to-flight">Singapore</span>
                            </td>
                            <td data-title="Duration" className="duration">
                                <p className="duration-flight">1h 45m</p>
                                <span className="type-direct">Direct</span>
                            </td>
                            <td data-title="Date" className="departure-date">01 Dec 2022</td>
                            <td data-title="People" className="people">5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
