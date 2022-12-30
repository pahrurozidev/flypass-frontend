import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowCircleLeft2 } from 'iconsax-react';
import { API } from '../../../services';
import axios from 'axios';
import moment from 'moment';

export default function Card() {
    const [customers, setCustomers] = useState([]);
    const [transactions, setTransactions] = useState([]);

    // const book = [];

    useEffect(() => {
        API.transactionsGet().then((transaction) => {
            setTransactions(transaction);
            transaction.forEach(booking => {
                API.listBookings().then((bookings) => {
                    const bookingID = bookings.filter(flight => flight.id == booking.bookingId)
                    setCustomers(bookingID);
                    // book.push(bookingID);
                });
            })
        });
    }, [])

    console.log(customers);

    return (
        <div>
            <div className='container-fluid pb-5'>
                <div className='admin-content px-lg-2'>

                    {/* header label */}
                    <div className='border rounded px-2 pt-md-3 px-md-3 pb-1 pt-3'>
                        <h2 className='fs-4'>Transaction</h2>
                        <p className='header-text fw-light col-12 col-lg-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias est vel explicabo. Nostrum alias explicabo aliquam veritatis sunt quasi hic repellendus ut error, non temporibus iste est quod facilis. Unde.</p>
                    </div>

                    {/* broadcrumb */}
                    <div className="border rounded py-2 px-2 px-md-3 d-flex justify-content-between mt-3 admin-flight-broadcrumb">
                        <Link to={'/transaction'} className="text-decoration-none text-dark d-flex btn gap-1 gap-md-2 ps-0 flex-wrap">
                            <ArrowCircleLeft2 size={20} />
                            <div className='label'>Transaction</div>
                        </Link>
                    </div>

                    {transactions.length !== 0 &&
                        <div className="container table-transaction p-0">
                            <table className="table table-striped">
                                <thead>
                                    <th className="booking_code">Booking Code</th>
                                    <th>Departure</th>
                                    <th>Arrival</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction) => (
                                        <tr key={transaction.id}>
                                            <td data-label="Booking Code" className="booking_code">
                                                <span>T3RB4NG</span>
                                            </td>
                                            <td data-label="Departure">
                                                <span>Jakarta</span>
                                            </td>
                                            <td data-label="Arrival">
                                                <span>Singapore</span>
                                            </td>
                                            <td data-label="Amount">
                                                <span>Rp. 4.416.500</span>
                                            </td>
                                            <td data-label="Date" className="col_date">{moment(transaction.createdAt).format('llll').slice(0, -15)}</td>
                                            <td data-label="Status" className="status_col">
                                                <div className={`alert ${(transaction.isPayed) ? "alert-success" : "alert-warning"}`}>
                                                    {transaction.isPayed ? "Verify" : "Confirm"}
                                                </div>
                                            </td>
                                            <td data-label="Action" className="td_action">
                                                <Link to={`/transaction/${transaction.id}`} className="detail_transaction">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                    </svg>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* <tr>
                                        <td data-label="Booking Code" className="booking_code">
                                            <span>T3RB4NG</span>
                                        </td>
                                        <td data-label="Departure">
                                            <span>Jakarta</span>
                                        </td>
                                        <td data-label="Arrival">
                                            <span>Singapore</span>
                                        </td>
                                        <td data-label="Amount">
                                            <span>Rp. 4.416.500</span>
                                        </td>
                                        <td data-label="Date" className="col_date">-</td>
                                        <td data-label="Status" className="status_col">
                                            <div className="alert alert_warning">
                                                Waiting
                                            </div>
                                        </td>
                                        <td data-label="Action" className="td_action">
                                            <Link to={`/transaction/1`} className="detail_transaction">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label="Booking Code" className="booking_code">
                                            <span>T3RB4NG</span>
                                        </td>
                                        <td data-label="Departure">
                                            <span>Jakarta</span>
                                        </td>
                                        <td data-label="Arrival">
                                            <span>Singapore</span>
                                        </td>
                                        <td data-label="Amount">
                                            <span>Rp. 4.416.500</span>
                                        </td>
                                        <td data-label="Date" className="col_date">01 Dec 2022</td>
                                        <td data-label="Status" className="status_col">
                                            <div className="alert alert_danger">
                                                Cancel
                                            </div>
                                        </td>
                                        <td data-label="Action" className="td_action">
                                            <Link to={`/transaction/1`} className="detail_transaction">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
}
