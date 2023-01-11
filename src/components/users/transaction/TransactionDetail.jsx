import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Profile from '../../../assets/dasboard-admin/profile.svg';
import { ArrowCircleLeft2 } from 'iconsax-react';
import { API } from '../../../services';

export default function CustomerDetail() {
    const { id } = useParams();
    const [detailCustomer, setDetailCustomer] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        API.getHistoryTransactions().then((bookings) => {
            const filterID = bookings.filter(flight => flight.id == id)
            setDetailCustomer(filterID);
        });
    }, [])

    setTimeout(() => {
        setShow(true);
    }, 3000);

    return (
        <div>
            {show && (
                <div className='container-fluid admin-flight pb-5'>
                    <div className='admin-content px-lg-2'>
                        <div className=''>
                            {/* header label */}
                            <div className='border rounded p-4 pt-3 pb-3 pb-md-1'>
                                <h2 className='fs-4'>Detail History</h2>
                                <p className='header-text fw-light col-12 col-lg-9 p-0'>Halaman ini menampilkan detail dari riwayat transaksi yang sudah dilakukan.</p>
                            </div>

                            {/* broadcrumb */}
                            <div className="border rounded py-2 px-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                                <Link to={'/user/dashboard/history'} className="text-decoration-none text-dark d-flex btn gap-2 ps-0">
                                    <ArrowCircleLeft2 size={20} />
                                    <div className='label'>History / History Detail</div>
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
                                                    <p className='data-item__name'>Title</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].PassengerContact.title}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>First Name</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].PassengerContact.firstName}</p>
                                                </div>
                                                <div className='data-item d-md-none'>
                                                    <p className='data-item__name'>Last Name</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].PassengerContact.lastName}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Last Name</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].PassengerContact.lastName}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Identity Type</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].Passengers[0].identityType}</p>
                                                </div>
                                            </div>
                                            <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Identity Number</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].Passengers[0].identityNumber}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Phone</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].PassengerContact.phone}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Email</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].PassengerContact.email}</p>
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
                                                    <p className='data-item__value'>: {detailCustomer[0].flight1.departureAirport.city}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Departure Date</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].flight1.departureDate}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Departure Time</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].flight1.departureTime.slice(0, -3)}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Duration</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].flight1.duration.slice(0, -3)}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Airport</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].flight1.departureAirport.name}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Airplane</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].flight1.Airplane.model}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Booking Code</p>
                                                    <p className='data-item__value'>: <b>{detailCustomer[0].bookingCode.toUpperCase()}</b></p>
                                                </div>
                                            </div>
                                            <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Arrival</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].flight1.arrivalAirport.city}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Arrival Date</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].flight1.arrivalDate}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Arrival Time</p>
                                                    <p className='data-item__value'> : {detailCustomer[0].flight1.departureTime.slice(0, -3)}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Flight Type</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].flight1.FlightType.name}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Airline</p>
                                                    <p className='data-item__value'> : {detailCustomer[0].flight1.Airline.name}</p>
                                                </div>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Passenger / Class</p>
                                                    <p className='data-item__value'>: {detailCustomer[0].passengerQty} Passenger, {detailCustomer[0].flight1.FlightClass.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className='card p-3'>
                                        <h5 className='border-bottom pb-2'>Payment</h5>
                                        <div className='data-list'>
                                            <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                                                {/* <div className='data-item'>
                                                    <p className='data-item__name'>Payment Code</p>
                                                    <p className='data-item__value'>: xxxx</p>
                                                </div> */}
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Price :</p>
                                                    <p className='data-item__value'>: Rp. {detailCustomer[0].totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                                                </div>
                                            </div>
                                            <div className='col-12 d-flex flex-column gap-3 gap-md-0'>
                                                <div className='data-item'>
                                                    <p className='data-item__name'>Status</p>
                                                    <p className='data-item__value'>: <span className={`${(detailCustomer[0].BookingStatus.name === "Completed") ? "paid" : "text-danger"}`}>{detailCustomer[0].BookingStatus.name}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
