import React, { useState, useEffect } from 'react';
import Garuda from '../../../../assets/dasboard-admin/garuda.svg';
import Line from '../../../../assets/dasboard-admin/line.svg';
import { API } from '../../../../services';

export default function ListBooking() {
    const [allBookings, setAllBookings] = useState([]);

    useEffect(() => {
        API.listBookings().then((res) => {
            setAllBookings(res);
        });
    }, [])

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
            {allBookings == 0 && <h1>Not Found</h1>}
            {allBookings.length !== 0 &&
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
                            {allBookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td data-title="Airlines" className="airlines">
                                        <img src={Garuda} alt="Airplanes" /><br className="d-none" />
                                        <span>{booking.flight1.Airline.name}</span>
                                    </td>
                                    <td data-title="From" className="departure-from">
                                        <p className="departure-time">{booking.flight1.departureTime}</p>
                                        <span className="from-flight">{booking.flight1.departureAirport.city}</span>
                                    </td>
                                    <td className="line-flight">
                                        <img src={Line} alt="" />
                                    </td>
                                    <td data-title="To" className="arrival-to">
                                        <p className="arrival-time">{booking.flight1.arrivalTime}</p>
                                        <span className="to-flight">{booking.flight1.arrivalAirport.city}</span>
                                    </td>
                                    <td data-title="Duration" className="duration">
                                        <p className="duration-flight">{booking.flight1.duration}</p>
                                        <span className="type-direct">{booking.flight1.FlightClass.name}</span>
                                    </td>
                                    <td data-title="Date" className="departure-date">{booking.flight1.departureDate}</td>
                                    <td data-title="People" className="people">{booking.passengerQty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
}
