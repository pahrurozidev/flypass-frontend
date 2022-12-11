import React from 'react'
import { ArrowCircleLeft2 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { Edit, Trash2 } from 'react-feather';

export default function FlightDetail() {
    return (
        <div className='container-fluid pb-5'>

            <div className='admin-content px-lg-2'>
                {/* header label */}
                <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
                    <h2 className='fs-4'>Flight Detail</h2>
                    <p className='header-text fw-light col-12 col-lg-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias est vel explicabo. Nostrum alias explicabo aliquam veritatis sunt quasi hic repellendus ut error, non temporibus iste est quod facilis. Unde.</p>
                </div>

                {/* broadcrumb */}
                <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                    <Link to={'/flight'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
                        <ArrowCircleLeft2 size={20} />
                        <div className='label'>Flight lists / detail</div>
                    </Link>

                    <div className="d-flex gap-2">
                        <Link to={'/flight/update'}>
                            <div className='btn btn-primary shadow'>
                                <Edit size={20} />
                            </div>
                        </Link>
                        <Link to={''}>
                            <div className='btn btn-danger shadow'>
                                <Trash2 size={20} />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* flight detail */}
                <div className="card p-4 pb-1 px-3 mt-3 admin-flight-detail">
                    <section>
                        <h5 className='border-bottom pb-4'>Flight Detail</h5>
                        <div className='mt-4 d-md-flex gap-md-5'>
                            <div className='d-flex flex-column gap-4 gap-md-2 col'>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Departure</p>
                                    <p className='col'>: Jakarta</p>
                                </div>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Departure Date</p>
                                    <p className='col'>: 01 December 2022</p>
                                </div>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Departure Time</p>
                                    <p className='col'>: 07.00</p>
                                </div>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Duration</p>
                                    <p className='col'>: 1 hour, 30 minute</p>
                                </div>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Airline</p>
                                    <p className='col'>: xxxxx</p>
                                </div>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Capacity</p>
                                    <p className='col'>: 111 Kursi</p>
                                </div>
                            </div>
                            <div className='d-flex flex-column mt-4 gap-4 gap-md-2 mt-md-0 col '>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Arrival</p>
                                    <p className='col'>: Lombok</p>
                                </div>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Arrival Date</p>
                                    <p className='col'>: 01 December 2022</p>
                                </div>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Arrival Time</p>
                                    <p className='col'>: 08.30</p>
                                </div>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Flight Type</p>
                                    <p className='col'>: One Way</p>
                                </div>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Airplane</p>
                                    <p className='col'>: xxxxx</p>
                                </div>
                                <div className='d-flex col-lg-10'>
                                    <p className='col fw-bold'>Price</p>
                                    <p className='col'>: IDR 18000</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
