import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../../assets/dasboard-admin/profile.svg';
import {
    People,
    Airplane, ArrowCircleLeft2, Warning2, AddSquare
} from 'iconsax-react';

export default function CustomerDetail() {
    return (
        <div className='container-fluid admin-flight pb-5'>
            <div className='admin-content px-lg-2'>
                <div className=''>
                    {/* header label */}
                    <div className='border rounded p-4 pt-3 pb-3 pb-md-1'>
                        <h2 className='fs-4'>Customer</h2>
                        <p className='header-text fw-light col-12 col-lg-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias est vel explicabo. Nostrum alias explicabo aliquam veritatis sunt quasi hic repellendus ut error, non temporibus iste est quod facilis. Unde.</p>
                    </div>

                    {/* broadcrumb */}
                    <div className="border rounded py-2 px-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                        <Link to={'/customer'} className="text-decoration-none text-dark d-flex btn gap-2 ps-0">
                            <ArrowCircleLeft2 size={20} />
                            <div className='label'>Customer lists / detail</div>
                        </Link>
                    </div>

                    {/* customer detail */}
                    <div className="card mt-3 p-2">
                        <div className="admin-customer-detail d-flex flex-column gap-2">
                            <section className='card p-3'>
                                <h5 className='border-bottom pb-2'>Personal</h5>
                                <img src={Profile} alt="" className='mt-3 mb-4' width={70} />
                                <div className='data-list'>
                                    <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                                        <div className='data-item'>
                                            <p className='data-item__name'>First Name</p>
                                            <p className='data-item__value'>: John</p>
                                        </div>
                                        <div className='data-item d-md-none'>
                                            <p className='data-item__name'>Last Name</p>
                                            <p className='data-item__value'>: Doe</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Date of Birth</p>
                                            <p className='data-item__value'>: 01 Feb 1995</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Date of Birth</p>
                                            <p className='data-item__value'>: 01 Feb 1995</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Phone</p>
                                            <p className='data-item__value'>: +6285xxxxxx</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Pos Code</p>
                                            <p className='data-item__value'>: xxxx</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Address</p>
                                            <p className='data-item__value'>: Jln xxx perigi city space</p>
                                        </div>
                                    </div>
                                    <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Last Name</p>
                                            <p className='data-item__value'>: Doe</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Gender</p>
                                            <p className='data-item__value'>: L</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Email</p>
                                            <p className='data-item__value'>: John@gmail.com</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>City</p>
                                            <p className='data-item__value'>: Mataram</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Nationality</p>
                                            <p className='data-item__value'>: Indonesia</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='card p-3'>
                                <h5 className='border-bottom pb-2'>Flight Schedule</h5>
                                <div className='data-list'>
                                    <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Departure</p>
                                            <p className='data-item__value'>: Jakarta</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Departure Date</p>
                                            <p className='data-item__value'>: 01 Feb 1995</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Departure Time</p>
                                            <p className='data-item__value'>: 07.00</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Duration</p>
                                            <p className='data-item__value'>: 1 hour, 30 min</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Airport</p>
                                            <p className='data-item__value'>: xxxx</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Airplane</p>
                                            <p className='data-item__value'>: xxxx</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Booking Code</p>
                                            <p className='data-item__value'>: xxxx</p>
                                        </div>
                                    </div>
                                    <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
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
                                            <p className='data-item__value'> : 08.30</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Flight Type</p>
                                            <p className='data-item__value'>: One Way</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Airline</p>
                                            <p className='data-item__value'> : xxxx</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Passenger / Class</p>
                                            <p className='data-item__value'>: 1 Passenger, Economic</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='card p-3'>
                                <h5 className='border-bottom pb-2'>Payment</h5>
                                <div className='data-list'>
                                    <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Payment Code</p>
                                            <p className='data-item__value'>: xxxx</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Price :</p>
                                            <p className='data-item__value'>: IDR xxxx</p>
                                        </div>
                                    </div>
                                    <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                                        <div className='data-item'>
                                            <p className='data-item__name'>User Balance</p>
                                            <p className='data-item__value'>: IDR xxxx</p>
                                        </div>
                                        <div className='data-item'>
                                            <p className='data-item__name'>Status</p>
                                            <p className='data-item__value paid'>: Paid off</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
