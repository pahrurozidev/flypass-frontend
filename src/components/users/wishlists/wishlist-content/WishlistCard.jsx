import React from 'react';
import Garuda from '../../../../assets/dasboard/garuda.svg';
import Line from '../../../../assets/dasboard/line.svg';

export default function Card() {
    return (
        <div className='container-fluid'>
            <h1 className='title-dashboard'>Wishlist</h1>
            <div className="container my-ticket p-0 ms-0">
                <div className="title-ticket d-flex flex-row align-items-center">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg></a>
                    <h5 className="ms-3">Wishlist</h5>
                </div>
                <div className="opsi-filter">
                    <a className="btn btn-departure"><span>Departure Date</span></a>
                    <a className="btn btn-booking"><span>Booking Type</span></a>
                    <a className="btn btn-date"><span>Date Range</span></a>
                </div>
                <div className="container list-booking p-0">
                    <div className="title-list">
                        <span>Airlines</span>
                        <span>From</span>
                        <span>To</span>
                        <span>Duration</span>
                        <span>Date</span>
                        <span>People</span>
                    </div>
                    <div className="list-card">
                        <div className="card">
                            <div className="card-body d-flex flex-row align-items-center">
                                <div className="row align-items-center ms-2 column airplane-row" style={{ width: "189px" }}>
                                    <div className='airplane col-lg-3 p-0 pt-1'>
                                        <img src={Garuda} alt="Airplanes" className='align-items-center' />
                                    </div>
                                    <h6 className='col-lg-9 name-plane'>Garuda Indonesia</h6>
                                </div>
                                <div className="row text-center column destination" style={{ width: "350px" }}>
                                    <div className="col-lg-4 col-md-4 p-0">
                                        <p className='departure-time'>08:05</p>
                                        <span className='from-flight'>Jakarta</span>
                                    </div>
                                    <img className='col-lg-4 col-md-4 p-0 px-2' src={Line} alt="" />
                                    <div className="col-lg-4 col-md-4 p-0">
                                        <p className='arrival-time'>09:50</p>
                                        <span className='to-flight'>Singapore</span>
                                    </div>
                                </div>
                                <div className="text-center column duration-row">
                                    <p className='duration'>1h 45m</p>
                                    <span className='direct'>Non Stop</span>
                                </div>
                                <span className='departure-date'>01 Dec 2022</span>
                                <span className='title-user'>Customers</span>
                                <span className='people' style={{ marginLeft: "40px" }}>5</span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex flex-row align-items-center">
                                <div className="row align-items-center ms-2 column airplane-row" style={{ width: "189px" }}>
                                    <div className='airplane col-lg-3 p-0 pt-1'>
                                        <img src={Garuda} alt="Airplanes" className='align-items-center' />
                                    </div>
                                    <h6 className='col-lg-9 name-plane'>Garuda Indonesia</h6>
                                </div>
                                <div className="row text-center column destination" style={{ width: "350px" }}>
                                    <div className="col-lg-4 col-md-4 p-0">
                                        <p className='departure-time'>08:05</p>
                                        <span className='from-flight'>Jakarta</span>
                                    </div>
                                    <img className='col-lg-4 col-md-4 p-0 px-2' src={Line} alt="" />
                                    <div className="col-lg-4 col-md-4 p-0">
                                        <p className='arrival-time'>09:50</p>
                                        <span className='to-flight'>Singapore</span>
                                    </div>
                                </div>
                                <div className="text-center column duration-row">
                                    <p className='duration'>1h 45m</p>
                                    <span className='direct'>Non Stop</span>
                                </div>
                                <span className='departure-date'>01 Dec 2022</span>
                                <span className='title-user'>Customers</span>
                                <span className='people' style={{ marginLeft: "40px" }}>5</span>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex flex-row align-items-center">
                                <div className="row align-items-center ms-2 column airplane-row" style={{ width: "189px" }}>
                                    <div className='airplane col-lg-3 p-0 pt-1'>
                                        <img src={Garuda} alt="Airplanes" className='align-items-center' />
                                    </div>
                                    <h6 className='col-lg-9 name-plane'>Garuda Indonesia</h6>
                                </div>
                                <div className="row text-center column destination" style={{ width: "350px" }}>
                                    <div className="col-lg-4 col-md-4 p-0">
                                        <p className='departure-time'>08:05</p>
                                        <span className='from-flight'>Jakarta</span>
                                    </div>
                                    <img className='col-lg-4 col-md-4 p-0 px-2' src={Line} alt="" />
                                    <div className="col-lg-4 col-md-4 p-0">
                                        <p className='arrival-time'>09:50</p>
                                        <span className='to-flight'>Singapore</span>
                                    </div>
                                </div>
                                <div className="text-center column duration-row">
                                    <p className='duration'>1h 45m</p>
                                    <span className='direct'>Non Stop</span>
                                </div>
                                <span className='departure-date'>01 Dec 2022</span>
                                <span className='title-user'>Customers</span>
                                <span className='people' style={{ marginLeft: "40px" }}>5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
