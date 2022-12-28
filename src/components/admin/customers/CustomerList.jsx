import React, { useState, useEffect } from 'react';
import { ArrowCircleLeft2 } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { Eye } from 'react-feather';
import axios from 'axios';

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkhhaWthbCBBcmlmIiwiaW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZ25keWl2aTkvaW1hZ2UvdXBsb2FkL3YxNjcxNjI2ODMzL1VzZXJzLUFkbWluaXN0cmF0b3ItaWNvbl9veHRnNTQucG5nIiwiZW1haWwiOiJoYWlrYWxAZmx5cGFzcy5jb20iLCJiaXJ0aERhdGUiOm51bGwsImdlbmRlciI6bnVsbCwicGhvbmUiOm51bGwsInJvbGVJZCI6MSwiY3JlYXRlZEF0IjoiMjAyMi0xMi0yNlQwMTo1NzoyOC4yNzhaIiwidXBkYXRlZEF0IjoiMjAyMi0xMi0yNlQxMjo1NToyNy41NDhaIiwiaWF0IjoxNjcyMTE5MTE4LCJleHAiOjE2NzIxNDA3MTh9.fFYHEVSY62ZNcL2Ffb54TAz9_tRxNlP3zngATeAr_xE";

    useEffect(() => {
        axios.get('http://localhost:8080/v1/bookings/all', {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            setCustomers(res.data.booking);
        })
        axios.get('http://localhost:8080/v1/pay/find/all', {
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

                    {/* customer list */}
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
                                    <div>{customer.createdAt}</div>
                                </div>
                                <Link to={`/customer/${customer.bookingId}`} className='customer-detail-button d-flex py-2 gap-1 bg-primary text-white justify-content-center text-decoration-none'>
                                    <Eye size={20} />
                                    <div>Detail</div>
                                </Link>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}
