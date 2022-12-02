import React from 'react'
import ArrowLeft from '../../../assets/dasboard-admin/arrow-left.png';

export default function CreateFlight() {
    return (
        <div className='container-fluid'>
            <h1 className='title-dashboard'>Dashboard</h1>
            <h6 className='broadcrumb'>
                <img src={ArrowLeft} alt="" />
                <span>Flight Lists / Add Flight</span>
            </h6>
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
