import React from 'react'
import { Link } from 'react-router-dom';
import { Airplane, ArrowCircleLeft2, Warning2, AddSquare } from 'iconsax-react';

export default function CreateFlight() {
    return (
        <div className='container-fluid mt-5 pb-5'>
            <div className='container all-booking p-0 ms-0 flight-header'>
                <div className='d-flex'>
                    <Airplane size={35} style={{
                        marginRight: '10px',
                        transform: 'rotate(45deg)'
                    }} />
                    <h2 className=''>Flight</h2>
                </div>
            </div>
            <div className="container all-booking p-0 ms-0 mt-4 broadcrumb">
                <div className='flight-list'>
                    <Link to={'/flight'} className="text-decoration-none fs-6 text-dark d-flex gap-2">
                        <ArrowCircleLeft2 size={30} />
                        <div className='pt-1'>Flight Lists / Add</div>
                    </Link>
                </div>
            </div>
            <div className="container all-booking p-0 ms-0 mt-4">
                <div className="container list-booking p-0">
                    <form action="" className='shadow pb-5 pt-3'>
                        <ul>
                            <li>
                                <label htmlFor="departure">Departure</label>
                                <select name="departure" id="departure">
                                    <option value="">departure</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="departure_date">Departure Date</label>
                                <input type="date" name='departure_date' />
                            </li>
                            <li>
                                <label htmlFor="departure_time">Departure Time</label>
                                <select name="departure_time" id="departure_time">
                                    <option value="">departure_time</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="flgiht_type">Flgiht Type</label>
                                <select name="flgiht_type" id="flgiht_type">
                                    <option value="">flgiht_type</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="airplane">Airplane</label>
                                <select name="airplane" id="airplane">
                                    <option value="">Airplane</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="price">Price</label>
                                <input type="text" name='price' />
                            </li>
                        </ul>
                        <div className='right-form'>
                            <ul>
                                <li>
                                    <label htmlFor="arrival">Arrival</label>
                                    <select name="arrival" id="arrival">
                                        <option value="">arrival</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="arrival_date">Arrival Date</label>
                                    <input type="date" name="arrival_date" id="arrival_date" />
                                </li>
                                <li>
                                    <label htmlFor="arrival_time">Arrival Time</label>
                                    <select name="arrival_time" id="arrival_time">
                                        <option value="">arrival_time</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="airline">Airline</label>
                                    <select name="airline" id="airline">
                                        <option value="">Airline</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="capacity">Capacity</label>
                                    <input type="text" name='capacity' />
                                </li>
                            </ul>
                            <div className='button'>
                                <button className='add-btn'>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
