import React from 'react'
import { Link } from 'react-router-dom';
import ArrowLeft from '../../../assets/dasboard-admin/arrow-left.png';

export default function FlightDetail() {
    return (
        <div className='container-fluid'>
            <h1 className='title-dashboard'>Dashboard</h1>
            <div className="container all-booking p-0 ms-0 mb-5 pb-5">
                <div className='appBar'>
                    <h6 className='broadcrumb mb-4'>
                        <img src={ArrowLeft} alt="" />
                        <span>Flight / Flgiht Detail</span>
                    </h6>
                    <div className='button'>
                        <Link to={'/flight/update'}>
                            <button className='btn btn_update'>Update</button>
                        </Link>
                        <div>
                            <button className='btn btn_delete'>Delete</button>
                        </div>
                    </div>
                </div>
                <div className='customer mt-3'>
                    <div className="customer-detail shadow px-5 py-1 pb-5">
                        <section>
                            <h5>Flight Detail</h5>
                            <div className='data-list'>
                                {/* left */}
                                <div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Departure</p>
                                        <p className='data-item__value'>: Jakarta</p>
                                    </div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Departure Date</p>
                                        <p className='data-item__value'>: 01 December 2022</p>
                                    </div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Departure Time</p>
                                        <p className='data-item__value'>: 07.00</p>
                                    </div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Duration</p>
                                        <p className='data-item__value'>: 1 hour, 30 minute</p>
                                    </div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Airline</p>
                                        <p className='data-item__value'>: xxxxx</p>
                                    </div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Capacity</p>
                                        <p className='data-item__value'>: 111 Kursi</p>
                                    </div>
                                </div>
                                {/* right */}
                                <div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Arrival</p>
                                        <p className='data-item__value'>: Lombok</p>
                                    </div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Arrival Date</p>
                                        <p className='data-item__value'>: 01 December 2022</p>
                                    </div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Arrival Time</p>
                                        <p className='data-item__value'>: 08.30</p>
                                    </div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Flight Type</p>
                                        <p className='data-item__value'>: One Way</p>
                                    </div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Airplane</p>
                                        <p className='data-item__value'>: xxxxx</p>
                                    </div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Price</p>
                                        <p className='data-item__value'>: IDR 18000</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
