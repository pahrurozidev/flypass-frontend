import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../../assets/dasboard-admin/profile.svg';
import {
    People,
    Airplane, ArrowCircleLeft2, Warning2, AddSquare
} from 'iconsax-react';

export default function CustomerDetail() {
    return (
        <div className='container-fluid mt-5 pb-5'>
            <div className='container all-booking p-0 ms-0 flight-header'>
                <div className='d-flex'>
                    <People size={35} style={{
                        marginRight: '10px',
                    }} />
                    <h2 className=''>Customer</h2>
                </div>
            </div>
            <div className="container all-booking p-0 ms-0 mt-4 broadcrumb">
                <div className='flight-list'>
                    <Link to={'/flight'} className="text-decoration-none fs-6 text-dark d-flex gap-2">
                        <ArrowCircleLeft2 size={30} />
                        <div className='pt-1'>Customer / Detail</div>
                    </Link>
                </div>
            </div>
            <div className="container all-booking p-0 ms-0 mb-5 pb-5 mt-4">
                <div className='customer'>
                    <div className="customer-detail shadow px-5 py-1 pb-5">
                        <section>
                            <h5>Personal</h5>
                            <img src={Profile} alt="" className='mb-4' />
                            <div className='data-list'>
                                {/* left */}
                                <div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>First Name</p>
                                        <p className='data-item__value'>: John</p>
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
                                {/* right */}
                                <div>
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
                        <section>
                            <h5>Flight Schedule</h5>
                            <div className='data-list'>
                                {/* left */}
                                <div>
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
                        <section>
                            <h5>Payment</h5>
                            <div className='data-list'>
                                {/* left */}
                                <div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Payment Code</p>
                                        <p className='data-item__value'>: xxxx</p>
                                    </div>
                                    <div className='data-item'>
                                        <p className='data-item__name'>Price :</p>
                                        <p className='data-item__value'>: IDR xxxx</p>
                                    </div>
                                </div>
                                {/* right */}
                                <div>
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
    )
}
