import React, { Component } from 'react';
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
import { useState } from 'react';
import { useEffect } from 'react';

function FlightDetail({booking}) {
    const { id } = useParams();
    const [flight, setFlight] = useState([]);
    const [show, setShow] = useState(false);
    const [bookValue, setBookValue] = useState({
        contactTitle: '',
        contactFirstName: '',
        contactLastName: '',
        contactPhone: '',
        contactEmail: '',
        identityType: '',
        identityNumber: '',
        baggage: [''],
    });
    const [book, setBook] = useState({
        contactTitle: '',
        contactFirstName: '',
        contactLastName: '',
        contactPhone: '',
        contactEmail: '',
        passenger: [
            {
                firstName: '',
                lastName: '',
                identityType: '',
                identityNumber: '',
                baggage: ['']
            },
        ],
        flight1Id: '',
        flight2Id: ''
    })


    useEffect(() => {
        API.flightDetail(id).then((flights) => {
            setFlight(flights);
        })

    }, [])

    const bookingValueHandler = (event) => {
        const books = { ...bookValue };

        books[event.target.name] = event.target.value;

        // console.log(books);

        setBookValue({
            contactTitle: books.contactTitle,
            contactFirstName: books.contactFirstName,
            contactLastName: books.contactLastName,
            contactPhone: books.contactPhone,
            contactEmail: books.contactEmail,
            identityType: books.identityType,
            identityNumber: books.identityNumber,
            baggage: [`${books.baggage}`],
        })

        // console.log(bookValue.baggage);

        setBook({
            contactTitle: bookValue.contactTitle,
            contactFirstName: bookValue.contactFirstName,
            contactLastName: bookValue.contactLastName,
            contactPhone: bookValue.contactPhone,
            contactEmail: bookValue.contactEmail,
            passenger: [
                {
                    firstName: bookValue.contactFirstName,
                    lastName: bookValue.contactLastName,
                    identityType: bookValue.identityType,
                    identityNumber: bookValue.identityNumber,
                    baggage: [`${bookValue.baggage}`]
                },
            ],
            flight1Id: `${flight.id}`,
            flight2Id: ''
        })

        // console.log(book);
    }

    const bookingHandler = () => {
        API.book(book).then((b) => console.log(b));
    }

    setTimeout(() => {
        setShow(true);
    }, 2000);


    return (
        <div>
            {show && (
                <>
                    {/* <!-- selected flight --> */}
                    <div class="order_flight">
                        <h1>Selected flight</h1>
                        <div class="selected-flight">
                            {/* <!-- flight header --> */}
                            <div class="selected-flight-header card p-3 rounded-0 rounded-top">
                                <div class="order_flight__header">
                                    <div><img src={Plane45} alt="" /></div>
                                    <div>{flight.departureAirport.city}</div>
                                    <div><img src={LongAAR} alt="" /></div>
                                    <div>{flight.arrivalAirport.city}</div>
                                </div>

                                <div class="order_flight__body">
                                    <div class="order_flight__body-main">
                                        <div class="order_flight__body-main-name">
                                            <div class="plan-logo"><img src={flight.Airline.image} alt="" width={70} /></div>
                                            <div class="name">
                                                <div>
                                                    <div>{flight.Airline.name}</div>
                                                    <div>{flight.FlightClass.name}</div>
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
                                        <div>{flight.departureAirport.city} ({flight.departureAirport.iata})</div>
                                        <div>{flight.departureAirport.name}</div>
                                    </div>
                                    <div>
                                        <div>{flight.arrivalAirport.city} ({flight.arrivalAirport.iata})</div>
                                        <div>{flight.arrivalAirport.name}</div>
                                    </div>
                                </div>
                                <div class="search-detail__attr">
                                    <div class="search-detail__attr-item card">
                                        <div class="attr_name">
                                            <div><img src={flight.Airline.image} alt="" width={60} /></div>
                                            <div>
                                                <div>{flight.Airline.name}</div>
                                                <div>{flight.flightCode} - {flight.FlightClass.name}</div>
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
                                                <div>Dewasa 1x</div>
                                                <div>Additional Cost</div>
                                            </div>
                                            <div class="d-flex flex-column gap-3">
                                                <div>Rp {flight.price}</div>
                                                <div>Rp 0</div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between border-top mx-3 py-3 px-0">
                                            <div>Total Price</div>
                                            <div class="text-primary">Rp {flight.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center button-price__continue mt-4 mb-5">
                                <Link to={'/search/flight/payment'}>
                                    <div class="d-flex border-1 rounded text-white justify-content-center border-0 price-button py-2 shadow" onClick={() => bookingHandler()}>Continue</div>
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
                                    <label for="contactFirstName" class="form-label">First Name</label>
                                    <input type="text" name='contactFirstName' class="form-control" id="contactFirstName" placeholder="ex: John" onChange={(event) => bookingValueHandler(event)} />
                                </div>
                                <div class="mb-3">
                                    <label for="contactTitle" class="form-label">Title</label>
                                    <select class="form-select contact-title" aria-label="Default select example" name='contactTitle' onChange={(event) => bookingValueHandler(event)}>
                                        <option selected>Select title</option>
                                        <option value="mr">Tn</option>
                                        <option value="mr">Mr</option>
                                        <option value="ms">Ms</option>
                                        <option value="mrs">Mrs</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="contactPhone" class="form-label">No. Handphone</label>
                                    <input type="text" class="form-control" id="contactPhone" name="contactPhone" placeholder="0821xxxxxxxx" onChange={(event) => bookingValueHandler(event)} />
                                </div>
                                <div class="mb-3">
                                    <label for="identityNumber" class="form-label">Identity Number</label>
                                    <input type="text" class="form-control" id="identityNumber" name="identityNumber" placeholder="521xxxxxxxx" onChange={(event) => bookingValueHandler(event)} />
                                </div>
                            </div>
                            <div class="input-right">
                                <div class="mb-3">
                                    <label for="contactLastName" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" name="contactLastName" id="contactLastName" placeholder="ex: Doe" onChange={(event) => bookingValueHandler(event)} />
                                </div>
                                <div class="mb-3">
                                    <label for="contactEmail" class="form-label">Email</label>
                                    <input type="email" class="form-control" name='contactEmail' id="contactEmail" placeholder="name@example.com" onChange={(event) => bookingValueHandler(event)} />
                                </div>
                                <div class="mb-3">
                                    <label for="identityType" class="form-label">Identity Type</label>
                                    <select class="form-select contact-title" aria-label="Default select example" name='identityType' onChange={(event) => bookingValueHandler(event)}>
                                        <option selected>Identity Type</option>
                                        <option value="ktp">KTP</option>
                                        <option value="passport">Passport</option>
                                    </select>
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
                                <div>{flight.departureAirport.city} ({flight.departureAirport.iata}) - {flight.arrivalAirport.city} ({flight.arrivalAirport.iata})</div>
                                <div>{flight.flightCode}</div>
                            </div>

                            <div class="d-flex flex-column gap-1 add-ons__input">
                                <div>Baggage</div>
                                <select class="form-select" aria-label="Default select example" name='baggage' onChange={(event) => bookingValueHandler(event)}>
                                    <option selected>Open this select menu</option>
                                    <option value="0">20 kg - free</option>
                                    <option value="25">5 + 20 kg - Rp. 165.000</option>
                                    <option value="30">10 + 20 kg - Rp. 165.000</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* <!-- payment --> */}

                </>
            )}
        </div>
    )
}

export default FlightDetail;