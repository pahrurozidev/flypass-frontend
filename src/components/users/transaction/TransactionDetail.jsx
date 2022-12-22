import React from 'react';

export default function CustomerDetail() {
    return (
        <div className="container-fluid position-relative">
            <h1 className="title-dashboard">Transaction History</h1>
            <div className="container transaction-list p-0 ms-0">
                <div className="title-transaction d-flex flex-row align-items-center">
                    <a href="#/user/dashboard/transaction"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg></a>
                    <h5 className="breadcrumb-detail ms-3">Transaction /</h5><span className="mb-0 next-breadcrumb">&nbsp;Transaction Detail</span>
                </div>
            </div>
            <div className="container all-transaction p-0 ms-0">``
                <div className="card transaction-card">
                    <div className="transaction-card-detail shadow py-3">
                        <section className="section_top d-flex">
                            <div className="left-list">
                                <h5>Flight Schedule</h5>
                                <div>
                                    <div className="data-item">
                                        <p className="data-item__name">Booking Code</p>
                                        <p className="data-item__value">: T3RB4NG</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Airplane</p>
                                        <p className="data-item__value">: Garuda Indonesia</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Departure</p>
                                        <p className="data-item__value">: Jakarta</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Departure Date</p>
                                        <p className="data-item__value">: 01 Dec 2022</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Departure Time</p>
                                        <p className="data-item__value">: 08:05</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Arrival</p>
                                        <p className="data-item__value">: Singapore</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Arrival Date</p>
                                        <p className="data-item__value">: 01 Dec 2022</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Arrival Time</p>
                                        <p className="data-item__value">: 09:50</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Passenger/Type</p>
                                        <p className="data-item__value">: 1/Adult</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Class Suite</p>
                                        <p className="data-item__value">: Economy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right-list">
                                <h5>Personal</h5>
                                <div>
                                    <div className="data-item">
                                        <p className="data-item__name">Full Name</p>
                                        <p className="data-item__value">: John Doe</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Phone Number</p>
                                        <p className="data-item__value">: +6285xxxxxx</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Email</p>
                                        <p className="data-item__value">: johndoe@gmail.com</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Gender</p>
                                        <p className="data-item__value">: Male</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Birth of Date</p>
                                        <p className="data-item__value">: 05 Sep 1995</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Address</p>
                                        <p className="data-item__value">: Jln xxx perigi city space</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">City</p>
                                        <p className="data-item__value">: Bandung</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Nationality</p>
                                        <p className="data-item__value">: Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section_bottom d-flex">
                            <div className="left-list">
                                <h5>Payment Detail</h5>
                                <div>
                                    <div className="data-item">
                                        <p className="data-item__name">Payment Code</p>
                                        <p className="data-item__value">: BXXXX</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Transaction Type</p>
                                        <p className="data-item__value">: Flight Pay</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Pajak, Biaya dan Beban</p>
                                        <p className="data-item__value">: Rp. 266.400</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Tarif Dasar</p>
                                        <p className="data-item__value">: Rp. 4.150.100</p>
                                    </div>
                                    <div className="data-item">
                                        <p className="data-item__name">Status</p>
                                        <p className="data-item__value">: <span className="alert-status">Paid</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="right-list">
                                <h5 className="total-price">Total Price</h5>
                                <p className="subtotal-price">Rp. 4.416.500</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
