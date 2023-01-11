import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { ArrowCircleLeft2 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { Eye } from 'react-feather';
import { API } from '../../../services';

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        API.listBookings().then((booking) => {
            setCustomers(booking);
            setShow(true);
        })
        API.transactionsGet().then((transaction) => {
            setTransactions(transaction);
        })
    }, [])

    return (
        <div className='container-fluid admin-flight pb-5'>
            <div className='admin-content px-lg-2'>
                <div>
                    {/* header label */}
                    <div className='border rounded p-4 pt-3 pb-3 pb-md-1'>
                        <h2 className='fs-4'>Customers</h2>
                        <p className='header-text fw-light col-12 col-lg-9 p-0'>Halaman ini menampilkan semua list customer yang telah melakukan pemesanan atau booking tiket penerbangan.</p>
                    </div>

                    {/* broadcrumb */}
                    <div className="border rounded py-2 px-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                        <Link to={'/customer'} className="text-decoration-none text-dark d-flex btn gap-2 ps-0">
                            <ArrowCircleLeft2 size={20} />
                            <div className='label'>Customer lists</div>
                        </Link>
                    </div>

                    {customers == 0 && <ReactLoading type={'bars'} color={'silver'} height={'10%'} width={'10%'} className="mt-5 m-auto" />}

                    {/* customer list */}
                    {customers.length !== 0 &&
                        <section className='mt-3 admin-customer-header'>
                            {customers.map((customer) => (
                                <div className="card customers overflow-hidden shadow">
                                    <div className='customer-header border-bottom py-3 fw-bold'>
                                        <div>Name</div>
                                        <div>Booking Code</div>
                                        <div>Passenger</div>
                                    </div>
                                    <div className='customer-body py-3'>
                                        <div>{customer.PassengerContact.firstName} {customer.PassengerContact.lastName}</div>
                                        <div><strong>{customer.bookingCode.toUpperCase()}</strong></div>
                                        <div>{customer.passengerQty} Passenger</div>
                                    </div>
                                    <Link to={`/customer/${customer.id}`} className='customer-detail-button d-flex py-2 gap-1 bg-primary text-white justify-content-center text-decoration-none'>
                                        <Eye size={20} />
                                        <div>Detail</div>
                                    </Link>
                                </div>
                            ))}
                        </section>
                    }
                </div>
            </div>
        </div>
    )
}
