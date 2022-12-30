import React, { useState, useEffect } from 'react';
import Garuda from '../../../../assets/dasboard-admin/garuda.svg';
import Line from '../../../../assets/dasboard-admin/line.svg';
import { API } from '../../../../services';
import NotFound from '../../../notfound/NotFound'

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
            <div className="card p-3 pb-2">
                <h5>All Bookings</h5>
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
                                <th>People</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allBookings.slice(0, 3).map((booking) => (
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
                                    <td data-title="People" className="people">{booking.passengerQty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className='btn btn-primary col-12 col-md-2 show-all-booking-btn position-absolute end-0 bottom-0'>Show All Booking</div>
                </div>}
            {allBookings == 0 && <NotFound alert={'Booking'} />}
        </>
    );
}
