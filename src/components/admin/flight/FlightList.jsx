import React from 'react'
import { Link } from 'react-router-dom';
import ArrowLeft from '../../../assets/dasboard-admin/arrow-left.png';
import Garuda from '../../../assets/dasboard-admin/garuda.svg';
import Line from '../../../assets/dasboard-admin/line.svg';
import Eye from '../../../assets/dasboard-admin/eye.png';

export default function FlightList() {
    return (
        <div className='container-fluid'>
            <h1 className='title-dashboard'>Dashboard</h1>
            <h6 className='broadcrumb'>
                <img src={ArrowLeft} alt="" />
                <span>Flight Lists</span>
            </h6>
            <div className="container all-booking p-0 ms-0 mt-5">
                <div className="flight">
                    <div className="container list-booking p-0">
                        <div className='d-flex justify-content-between'>
                            <div className="opsi-filter">
                                <a className="btn btn-departure"><span>Departure Date</span></a>
                                <a className="btn btn-booking"><span>Booking Type</span></a>
                                <a className="btn btn-date"><span>Date Range</span></a>
                            </div>
                            <Link to={'/flight/create'}>
                                <div className='add-flight'>Add Flight</div>
                            </Link>
                        </div>
                        <div className="title-list">
                            <span>Airlines</span>
                            <span>From</span>
                            <span>To</span>
                            <span>Duration</span>
                            <span>Date</span>
                            <span>People</span>
                            <span>Action</span>
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

                                    <Link to={'/flight/1'}>
                                        <img src={Eye} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
