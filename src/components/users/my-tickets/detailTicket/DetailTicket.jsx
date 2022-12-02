import React from 'react';
import Garuda from '../../../../assets/dasboard/garuda.svg';
import Line from '../../../../assets/dasboard/line.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

export default function Card() {
    return (
        <div className="container-fluid">
            <h1 className="title-dashboard">My Ticket</h1>
            <div className="container my-ticket p-0 ms-0">
                <div className="title-ticket d-flex flex-row align-items-center">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg></a>
                    <h5 className="breadcrumb-detail ms-3">Tikcet List /</h5><span className="mb-0">&nbsp;Detail Ticket</span>
                </div>
                <div className="container e-ticket p-0">
                    <div className="card-e-ticket">
                        <div className="card">
                            <div className="blue-top">
                                <FontAwesomeIcon icon={faPlane} />
                                <span>E-TICKET</span>
                            </div>
                            <div className="card-body d-flex flex-row align-items-center">
                                <div className="line-vertical"></div>
                                <div className="row e-ticket-detail flex-row justify-content-between m-0">
                                    <div className="col-lg-8 ticket-left p-0">
                                        <div className="frame-top d-flex flex-row align-items-center">
                                            <img src={Garuda} alt="Airplanes" />
                                            <h6 className="name-plane">Garuda Indonesia</h6>
                                            <div className="divider-plane"></div>
                                            <span className="classes">Economy Class</span>
                                        </div>
                                        <div className="frame-bottom d-flex flex-row">
                                            <div className="depart-frame col-lg-5 d-flex flex-column justify-content-between">
                                                <div className="country-depart">
                                                    <h1>CGK</h1>
                                                    <span>Jakarta</span>
                                                </div>
                                                <div className="time-depart">
                                                    <span>Depart</span>
                                                    <p>01 Dec - 08:05</p>
                                                </div>
                                            </div>
                                            <FontAwesomeIcon icon={faPlane} className="col-lg-2" />
                                            <div className="arrive-frame col-lg-5 d-flex flex-column justify-content-between">
                                                <div className="country-arrive">
                                                    <h1>SIN</h1>
                                                    <span>Singapore</span>
                                                </div>
                                                <div className="time-arrive">
                                                    <span>Arrive</span>
                                                    <p>03 Dec - 09:50</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 ticket-right p-0">
                                        <div className="ticket-right-top d-flex flex-column">
                                            <span>Booking Code</span>
                                            <span>T312B4NG</span>
                                        </div>
                                        <div className="ticket-right-bottom d-flex flex-column">
                                            <span>Passenger Info :</span>
                                            <div className="title-passenger-info d-flex flex-row justify-content-between">
                                                <div className="name-passenger col-6 d-flex flex-column">
                                                    <span className="title">Name</span>
                                                    <span>John Doe</span>
                                                </div>
                                                <div className="type-passenger col-6 d-flex flex-column text-end">
                                                    <span className="title">Type</span>
                                                    <span>Adult</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="blue-top">
                                <FontAwesomeIcon icon={faPlane} />
                                <span>E-TICKET</span>
                            </div>
                            <div className="card-body d-flex flex-row align-items-center">
                                <div className="line-vertical"></div>
                                <div className="row e-ticket-detail flex-row justify-content-between m-0">
                                    <div className="col-lg-8 ticket-left p-0">
                                        <div className="frame-top d-flex flex-row align-items-center">
                                            <img src={Garuda} alt="Airplanes" />
                                            <h6 className="name-plane">Garuda Indonesia</h6>
                                            <div className="divider-plane"></div>
                                            <span className="classes">Economy Class</span>
                                        </div>
                                        <div className="frame-bottom d-flex flex-row">
                                            <div className="depart-frame col-lg-5 d-flex flex-column justify-content-between">
                                                <div className="country-depart">
                                                    <h1>SIN</h1>
                                                    <span>Singapore</span>
                                                </div>
                                                <div className="time-depart">
                                                    <span>Depart</span>
                                                    <p>03 Dec - 06:05</p>
                                                </div>
                                            </div>
                                            <FontAwesomeIcon icon={faPlane} className="col-lg-2" />
                                            <div className="arrive-frame col-lg-5 d-flex flex-column justify-content-between">
                                                <div className="country-arrive">
                                                    <h1>CGK</h1>
                                                    <span>Jakarta</span>
                                                </div>
                                                <div className="time-arrive">
                                                    <span>Arrive</span>
                                                    <p>03 Dec - 07:50</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 ticket-right p-0">
                                        <div className="ticket-right-top d-flex flex-column">
                                            <span>Booking Code</span>
                                            <span>B4L1K</span>
                                        </div>
                                        <div className="ticket-right-bottom d-flex flex-column">
                                            <span>Passenger Info :</span>
                                            <div className="title-passenger-info d-flex flex-row justify-content-between">
                                                <div className="name-passenger col-6 d-flex flex-column">
                                                    <span className="title">Name</span>
                                                    <span>John Doe</span>
                                                </div>
                                                <div className="type-passenger col-6 d-flex flex-column text-end">
                                                    <span className="title">Type</span>
                                                    <span>Adult</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
