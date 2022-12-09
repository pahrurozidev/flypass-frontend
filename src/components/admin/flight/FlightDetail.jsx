import React from 'react'
import { Airplane, ArrowCircleLeft2, Trash, Edit, AddSquare } from 'iconsax-react';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../../assets/dasboard-admin/arrow-left.png';

export default function FlightDetail() {
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
                        <div className='pt-1'>Flight Lists / Detail</div>
                    </Link>
                </div>
                <div className='d-flex'>
                    <Link to={'/flight/update'}>
                        <div className='add-flight fs-6 d-flex gap-2'>
                            <Edit />
                            <div>Update</div>
                        </div>
                    </Link>
                    <Link to={''}>
                        <div className='add-flight bg-danger fs-6 d-flex gap-2'>
                            <Trash />
                            <div>Delete</div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="container all-booking p-0 ms-0 mt-4 mb-5 pb-5">
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
