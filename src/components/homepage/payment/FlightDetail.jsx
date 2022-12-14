import React from 'react';
import { useParams } from 'react-router-dom';
import Plane45 from '../../../assets/homepage/plane45.png';
import LongAAR from '../../../assets/homepage/long-arrow-alt-right.png';
import Garuda from '../../../assets/homepage/garuda.svg';
import LineVertical from '../../../assets/homepage/line-vertical.png';
import ArrowBottom from '../../../assets/homepage/arrow-bottom.png';
import Clock from '../../../assets/homepage/clock.png';
import FlightRing from '../../../assets/homepage/flight-ring.png';
import Bagasi from '../../../assets/homepage/bagasi.png'
import Food from '../../../assets/homepage/food.png'
import Entertain from '../../../assets/homepage/entertain.png'
import Warning from '../../../assets/homepage/warning.png'
import { Link } from 'react-router-dom';
import { API } from '../../../services';
import moment from 'moment';

export default function FlightDetail() {
    const { id } = useParams();

    API.flightDetail(id).then((flight) => {
        console.log(flight);
    })

    return (
        <>
            {/* <!-- selected flight --> */}
            <div class="order_flight">
                <h1>Selected flight</h1>
                <div class="selected-flight">
                    {/* <!-- flight header --> */}
                    <div class="selected-flight-header card p-3 rounded-0 rounded-top">
                        <div class="order_flight__header">
                            <div><img src={Plane45} alt="" /></div>
                            <div>Jakarta</div>
                            <div><img src={LongAAR} alt="" /></div>
                            <div>Singapore</div>
                        </div>

                        <div class="order_flight__body">
                            <div class="order_flight__body-main">
                                <div class="order_flight__body-main-name">
                                    <div class="plan-logo"><img src={Garuda} alt="" /></div>
                                    <div class="name">
                                        <div>
                                            <div>Garuda Indonesia</div>
                                            <div>Ecomony</div>
                                        </div>
                                        <div class="mobile-timeline">
                                            <div>Thu, 01 Dec</div>
                                            <div>Direct - 1h 45m</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="desktop-timeline">
                                    <div><img src={LineVertical} alt="" /></div>
                                    <div>Thu, 01 Dec</div>
                                    <div><img src={LineVertical} alt="" /></div>
                                    <div>Direct - 1h 45m</div>
                                </div>
                            </div>

                            <div>
                                <img src={ArrowBottom} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- flight detail --> */}
                    <div class="flight-detail search-detail card rounded-0 rounded-bottom border-top-0">
                        <div class="search-detail__time s-detail">
                            <div class="search-detail__time_departure">08:05 - 01 Dec</div>
                            <div class="search-detail__time_estimation">
                                <div><img src={Clock} alt="" /></div>
                                <div>1h 45m</div>
                            </div>
                            <div class="search-detail__time_arrival">10:50 - 01 Dec</div>
                        </div>
                        <div class="s-detail search-detail__ring">
                            <img src={FlightRing} alt="" />
                        </div>
                        <div class="s-detail search-detail__destination">
                            <div>
                                <div>Jakarta (CGK)</div>
                                <div>Soekarno Hatta International Airport</div>
                            </div>
                            <div>
                                <div>Singapore (SIN)</div>
                                <div>Changi Intl</div>
                            </div>
                        </div>
                        <div class="search-detail__attr">
                            <div class="search-detail__attr-item card">
                                <div class="attr_name">
                                    <div><img src={Garuda} alt="" /></div>
                                    <div>
                                        <div>Garuda Indonesia</div>
                                        <div>GA828 - Economy</div>
                                    </div>
                                </div>
                                <div class="attr_service">
                                    <div class="attr_service_item">
                                        <div><img src={Bagasi} alt="" /></div>
                                        <div>Bagasi 30 kg</div>
                                    </div>
                                    <div class="attr_service_item">
                                        <div><img src={Food} alt="" /></div>
                                        <div>Makanan di Pesawat</div>
                                    </div>
                                    <div class="attr_service_item">
                                        <div><img src={Entertain} alt="" /></div>
                                        <div>Hiburan di Pesawat</div>
                                    </div>
                                    <div class="attr_service_item">
                                        <div><img src={Warning} alt="" /></div>
                                        <div>
                                            <div><span class="fw-bold">Pesawat</span>: Airbus A330</div>
                                            <div><span class="fw-bold">Total Kursi</span>: 3-3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- flight price detail --> */}
                    <div class="price-detail-header">
                        <div class="card overflow-hidden">
                            <div class="price-detail">
                                <div class="card p-3 border-0 border-bottom rounded-0">Price Details</div>
                                <div class="p-3 d-flex justify-content-between">
                                    <div class="d-flex flex-column gap-3">
                                        <div>Subtotal</div>
                                        <div>Dewasa 1x</div>
                                        <div>Additional Cost</div>
                                    </div>
                                    <div class="d-flex flex-column gap-3">
                                        <div>Rp 4.416.500</div>
                                        <div>Rp 4.416.500</div>
                                        <div>Rp 0</div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between border-top mx-3 py-3 px-0">
                                    <div>Total Price</div>
                                    <div class="text-primary">Rp 4.416.500</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center button-price__continue mt-4 mb-5">
                        <Link to={'/search/flight/payment'}>
                            <div class="d-flex border-1 rounded text-white justify-content-center border-0 price-button py-2 shadow">Continue</div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <!-- Contact detail --> */}
            <div class="contact-detail">
                <h1>Contact details</h1>
                <div class="card p-3 contact-detail-item">
                    <div class="input-left">
                        <div class="mb-3">
                            <label for="first-name" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="first-name" placeholder="ex: John" />
                        </div>
                        <div class="mb-3">
                            <label for="last-name" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="last-name" placeholder="ex: Doe" />
                        </div>
                    </div>
                    <div class="input-right">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="notelp" class="form-label">No. Handphone</label>
                            <input type="text" class="form-control" id="notelp" placeholder="0821xxxxxxxx" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Add ons --> */}
            <div class="add-ons">
                <h1>Add ons</h1>
                <div class="card p-3 border-bottom-0 rounded-0 rounded-top">Add Baggage</div>
                <div class="card p-3 rounded-0 gap-3 rounded-bottom">
                    <div class="d-flex justify-content-between">
                        <div>Jakarta (CGK) - Singapore (SIN)</div>
                        <div>GA828</div>
                    </div>

                    <div class="d-flex flex-column gap-1 add-ons__input">
                        <div>Adult 1</div>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="4">30 kg - free</option>
                            <option value="1">30 kg + 5 kg - Rp. 150.000</option>
                            <option value="2">30 kg + 5 kg - Rp. 150.000</option>
                            <option value="3">30 kg + 5 kg - Rp. 150.000</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* <!-- payment --> */}

        </>
    )
}
