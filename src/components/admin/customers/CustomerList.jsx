import React from 'react';
import { ArrowCircleLeft2 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { Eye } from 'react-feather';

export default function CustomerList() {
    return (
        <div className='container-fluid admin-flight pb-5'>
            <div className='admin-content px-lg-2'>
                <div>
                    {/* header label */}
                    <div className='border rounded p-4 pt-3 pb-3 pb-md-1'>
                        <h2 className='fs-4'>Customer</h2>
                        <p className='header-text fw-light col-12 col-lg-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias est vel explicabo. Nostrum alias explicabo aliquam veritatis sunt quasi hic repellendus ut error, non temporibus iste est quod facilis. Unde.</p>
                    </div>

                    {/* broadcrumb */}
                    <div className="border rounded py-2 px-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                        <Link to={'/customer'} className="text-decoration-none text-dark d-flex btn gap-2 ps-0">
                            <ArrowCircleLeft2 size={20} />
                            <div className='label'>Customer lists</div>
                        </Link>
                    </div>

                    {/* customer list */}
                    <section className='mt-3 admin-customer-header'>
                        <div className="card customers overflow-hidden shadow">
                            <div className='customer-header border-bottom py-3 fw-bold'>
                                <div>Name</div>
                                <div>Departure</div>
                                <div>Arrival</div>
                            </div>
                            <div className='customer-body py-3'>
                                <div>Pahrurozi</div>
                                <div>Jakarta</div>
                                <div>Lombok</div>
                            </div>
                            <Link to={'/customer/1'} className='customer-detail-button d-flex py-2 gap-1 bg-primary text-white justify-content-center text-decoration-none'>
                                <Eye size={20} />
                                <div>Detail</div>
                            </Link>
                        </div>
                        <div className="card customers overflow-hidden shadow">
                            <div className='customer-header border-bottom py-3 fw-bold'>
                                <div>Name</div>
                                <div>Departure</div>
                                <div>Arrival</div>
                            </div>
                            <div className='customer-body py-3'>
                                <div>Pahrurozi</div>
                                <div>Jakarta</div>
                                <div>Lombok</div>
                            </div>
                            <Link to={'/customer/1'} className='customer-detail-button d-flex py-2 gap-1 bg-primary text-white justify-content-center text-decoration-none'>
                                <Eye size={20} />
                                <div>Detail</div>
                            </Link>
                        </div>
                        <div className="card customers overflow-hidden shadow">
                            <div className='customer-header border-bottom py-3 fw-bold'>
                                <div>Name</div>
                                <div>Departure</div>
                                <div>Arrival</div>
                            </div>
                            <div className='customer-body py-3'>
                                <div>Pahrurozi</div>
                                <div>Jakarta</div>
                                <div>Lombok</div>
                            </div>
                            <Link to={'/customer/1'} className='customer-detail-button d-flex py-2 gap-1 bg-primary text-white justify-content-center text-decoration-none'>
                                <Eye size={20} />
                                <div>Detail</div>
                            </Link>
                        </div>
                        <div className="card customers overflow-hidden shadow">
                            <div className='customer-header border-bottom py-3 fw-bold'>
                                <div>Name</div>
                                <div>Departure</div>
                                <div>Arrival</div>
                            </div>
                            <div className='customer-body py-3'>
                                <div>Pahrurozi</div>
                                <div>Jakarta</div>
                                <div>Lombok</div>
                            </div>
                            <Link to={'/customer/1'} className='customer-detail-button d-flex py-2 gap-1 bg-primary text-white justify-content-center text-decoration-none'>
                                <Eye size={20} />
                                <div>Detail</div>
                            </Link>
                        </div>
                        <div className="card customers overflow-hidden shadow">
                            <div className='customer-header border-bottom py-3 fw-bold'>
                                <div>Name</div>
                                <div>Departure</div>
                                <div>Arrival</div>
                            </div>
                            <div className='customer-body py-3'>
                                <div>Pahrurozi</div>
                                <div>Jakarta</div>
                                <div>Lombok</div>
                            </div>
                            <Link to={'/customer/1'} className='customer-detail-button d-flex py-2 gap-1 bg-primary text-white justify-content-center text-decoration-none'>
                                <Eye size={20} />
                                <div>Detail</div>
                            </Link>
                        </div>
                        <div className="card customers overflow-hidden shadow">
                            <div className='customer-header border-bottom py-3 fw-bold'>
                                <div>Name</div>
                                <div>Departure</div>
                                <div>Arrival</div>
                            </div>
                            <div className='customer-body py-3'>
                                <div>Pahrurozi</div>
                                <div>Jakarta</div>
                                <div>Lombok</div>
                            </div>
                            <Link to={'/customer/1'} className='customer-detail-button d-flex py-2 gap-1 bg-primary text-white justify-content-center text-decoration-none'>
                                <Eye size={20} />
                                <div>Detail</div>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
