import React, { useState, useEffect } from 'react';
import { ArrowCircleLeft2 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { Eye } from 'react-feather';
import axios from 'axios';
import moment from 'moment';

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const token = "";

    useEffect(() => {
        axios.get('https://flypass-api.up.railway.app/v1/bookings/all', {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            setCustomers(res.data.booking);
        })
        axios.get('https://flypass-api.up.railway.app/v1/pay/find/all', {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            setTransactions(res.data.transaction);
        })
    }, [])

    console.log(transactions);

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

                    {
                        transactions == 0 &&
                        <div className='container alert-danger border rounded d-flex items-center justify-content-center py-3'>
                            <div className="text-dark">Transaction Not Found</div>
                        </div>
                    }

                    {/* customer list */}
                    {transactions.length !== 0 &&
                        <section className='mt-3 admin-customer-header'>
                            {transactions.map((customer) => (
                                <div className="card customers overflow-hidden shadow">
                                    <div className='customer-header border-bottom py-3 fw-bold'>
                                        <div>Booking ID</div>
                                        <div>Status</div>
                                        <div>Created Date</div>
                                    </div>
                                    <div className='customer-body py-3'>
                                        <div>{customer.bookingId}</div>
                                        <div>{customer.isPayed ? "Paid" : "Unpaid"}</div>
                                        <div>{moment(customer.createdAt).format('llll').slice(0, -15)}</div>
                                    </div>
                                    <Link to={`/customer/${customer.bookingId}`} className='customer-detail-button d-flex py-2 gap-1 bg-primary text-white justify-content-center text-decoration-none'>
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
