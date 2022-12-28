import React from 'react';
import { Link } from 'react-router-dom';

export default function Card() {
    return (

        <div className='container-fluid pb-5'>
            <div className='admin-content px-lg-2'>
                <div className="container-fluid position-relative">
                    <h1 className="title-dashboard">Transaction History</h1>
                    <div className="container transaction-list p-0 ms-0">
                        <div className="title-transaction d-flex flex-row align-items-center">
                            <h5>Transactions</h5>
                        </div>
                        <div className="opsi-filter">
                            <a className="btn btn-departure"><span>Departure Date</span></a>
                            <a className="btn btn-booking"><span>Booking Type</span></a>
                            <a className="btn btn-date"><span>Date Range</span></a>
                        </div>
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
                                            <div className="alert alert_success">
                                                Paid
                                            </div>
                                        </td>
                                        <td data-label="Action" className="td_action">
                                            <Link to={`transaction/1`} className="detail_transaction">
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
