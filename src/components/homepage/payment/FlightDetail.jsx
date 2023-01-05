import React, { Component } from 'react';
import { redirect, useParams, useNavigate } from 'react-router-dom';
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
import { SaveAdd } from 'iconsax-react';
import moment from 'moment';

function FlightDetail({ bookings, addCounts }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [flight, setFlight] = useState([]);
    const [show, setShow] = useState(false);
    const [price, setPrice] = useState();
    const [wishlist, setWishlist] = useState([]);
    const [wishStatus, setWishStatus] = useState(false);
    const [roundTrip, setRoundTrip] = useState(false);
    const [priceFlight, setPriceFlight] = useState(0);
    const [oneWayPrice, setOneWayPrice] = useState(0);
    const [departureBaggage, setDepartureBaggage] = useState(0);
    const [returnBaggage, setReturnBaggage] = useState(0);
    const [returnFlight, setReturnFlight] = useState([]);
    const [bookValue, setBookValue] = useState({
        contactTitle: '',
        contactFirstName: '',
        contactLastName: '',
        contactPhone: '',
        contactEmail: '',
        identityType: '',
        identityNumber: '',
        departureBaggage: '',
        returnBaggage: '',
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
        flight2Id: '',
    })

    useEffect(() => {

        const flights = id.split('&');

        const departureFlightId = parseInt(flights[0]);
        const returnFlightId = parseInt(flights[1]);

        API.flightDetail(flights.length === 2 ? departureFlightId : id).then((flights) => {
            setFlight(flights);
            setPrice(flights.price);
            setShow(true);
        })

        flights.length === 2 && API.flightDetail(returnFlightId).then((flights) => {
            setReturnFlight(flights);
            setRoundTrip(true)
        })

    }, [])

    const bookingValueHandler = (event) => {
        const books = { ...bookValue };

        books[event.target.name] = event.target.value;

        setBookValue({
            contactTitle: books.contactTitle,
            contactFirstName: books.contactFirstName,
            contactLastName: books.contactLastName,
            contactPhone: books.contactPhone,
            contactEmail: books.contactEmail,
            identityType: books.identityType,
            identityNumber: books.identityNumber,
            departureBaggage: [`${books.departureBaggage}`],
            returnBaggage: [`${books.returnBaggage}`],
        })

        const departureBag = parseInt(books.departureBaggage);
        const returnBag = parseInt(books.returnBaggage);

        let departurBagg = 0;
        let returnBagg = 0;

        if (departureBag === 25) {
            setDepartureBaggage(flight.price * 0.1)
            departurBagg = flight.price * 0.1;
        } else if (departureBag === 30) {
            setDepartureBaggage(flight.price * 0.15)
            departurBagg = flight.price * 0.15;
        } else {
            setDepartureBaggage(0);
            departurBagg = 0;
        }

        if (roundTrip) {
            if (returnBag === 25) {
                setReturnBaggage(returnFlight.price * 0.1)
                returnBagg = returnFlight.price * 0.1;
            } else if (returnBag === 30) {
                setReturnBaggage(returnFlight.price * 0.15)
                returnBagg = returnFlight.price * 0.15;
            } else {
                setReturnBaggage(0);
                returnBagg = 0;
            }

            // priceTotal(flight.price + departurBagg + returnFlight.price + returnBagg);
        } else {
            // priceTotal(flight.price + departurBagg);
        }

        !returnFlight.id && setBook({
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
                    baggage: [`${books.departureBaggage}`]
                },
            ],
            flight1Id: `${flight.id}`,
        })

        returnFlight.id && setBook({
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
                    baggage: [`${books.departureBaggage}`, `${books.returnBaggage}`]
                },
            ],
            flight1Id: flight.id,
            flight2Id: returnFlight.id
        })
    }

    const bookingHandler = () => {

        if (book.contactTitle !== "" &&
            book.contactFirstName !== "" &&
            book.contactLastName !== "" &&
            book.contactPhone !== "" &&
            book.contactEmail !== "" &&
            book.passenger[0].identityNumber !== "" &&
            book.passenger[0].identityType !== "" &&
            book.passenger[0].baggage !== [""]) {

            API.book(book).then((booking) => {
                console.log(booking.data);

                bookings(booking);
                if (booking.data) {
                    const id = booking.data.booking.id;
                    navigate(`/search/flight/payment/${id}`);
                    window.location.reload();
                }
            });
        } else {
            alert('Contact Form is Required!');
            return;

        }
    }

    const addWishListHandler = () => {
        const token = localStorage.getItem("token");
        !token && navigate('/login');

        console.log('Run wishlist');

        API.wishlists().then((flights) => {

            if (JSON.stringify(flights) != 'null') {
                const wishFlight = flights.filter((f) => f.id == flight.id);
                console.log(wishFlight);

                wishFlight && API.deleteWishlists(flight.id).then((res) => {
                    console.log(res)
                    res.data && setWishStatus(false);
                });
            } else {
                API.addWishlists(flight.id).then((res) => {
                    console.log(res)
                    res.data && setWishStatus(true);
                });
            }
        })
    }

    useEffect(() => {
        API.wishlists().then((flights) => {
            if (JSON.stringify(flights) != 'null') {
                const wishFlight = flights.filter((f) => f.id === flight.id);
                wishFlight.length !== 0 && setWishStatus(true);
            }
        })
    }, [])

    return (
        <div>
            {show && (
                <>
                    {/* <!-- departure flight --> */}
                    <div class="order_flight">
                        <h1>Departure flight</h1>
                        <div class="selected-flight">
                            {/* <!-- flight header --> */}
                            <div class="selected-flight-header card p-3 rounded-0 rounded-top">
                                <div className='d-flex justify-content-between'>
                                    <div class="order_flight__header">
                                        <div><img src={Plane45} alt="" /></div>
                                        <div>{flight.departureAirport.city}</div>
                                        <div><img src={LongAAR} alt="" /></div>
                                        <div>{flight.arrivalAirport.city}</div>
                                    </div>
                                    {roundTrip === false &&
                                        <div
                                            className={`border p-2 rounded shadow wishlist-button ${wishStatus && 'bg-primary text-white'}`}
                                            onClick={() => addWishListHandler()} >
                                            <SaveAdd width={40} className="" />
                                        </div>}
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
                                                    <div>{moment(flight.departureDate).format('llll').slice(0, -15)}</div>
                                                    <div>Direct - {flight.duration.slice(1, 2)}h, {flight.duration.slice(3, 5)}m</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="desktop-timeline">
                                            <div><img src={LineVertical} alt="" /></div>
                                            <div>{moment(flight.arrivalDate).format('llll').slice(0, -15)}</div>
                                            <div><img src={LineVertical} alt="" /></div>
                                            <div>Direct - {flight.duration.slice(1, 2)}h, {flight.duration.slice(3, 5)}m</div>
                                        </div>
                                    </div>

                                    <div>
                                        {/* <img src={ArrowBottom} alt="" /> */}
                                    </div>
                                </div>
                            </div>

                            {/* <!-- flight detail --> */}
                            <div className={`flight-detail search-detail ${roundTrip && 'search-detail-roundtrip'} card rounded-0 rounded-bottom border-top-0`}>
                                <div class="search-detail__time s-detail">
                                    <div class="search-detail__time_departure">{flight.departureTime.slice(0, -3)} - {moment(flight.departureDate).format('llll').slice(0, -15)}</div>
                                    <div class="search-detail__time_estimation">
                                        <div><img src={Clock} alt="" /></div>
                                        <div>{flight.duration.slice(1, 2)}h, {flight.duration.slice(3, 5)}m</div>
                                    </div>
                                    <div class="search-detail__time_arrival">{flight.arrivalTime.slice(0, -3)} - {moment(flight.arrivalDate).format('llll').slice(0, -15)}</div>
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
                                        {roundTrip ?
                                            <>
                                                <div class="p-3 d-flex justify-content-between">
                                                    <div class="d-flex flex-column gap-3">
                                                        <div>Departure ({flight.departureAirport.iata} - {flight.arrivalAirport.iata})</div>
                                                        <div>Dewasa 1x</div>
                                                        <div>Additional Cost</div>
                                                    </div>
                                                    <div class="d-flex flex-column gap-3 text-end">
                                                        <div>Rp {flight.price + departureBaggage}</div>
                                                        <div>Rp {flight.price}</div>
                                                        <div>Rp {departureBaggage}</div>
                                                    </div>
                                                </div>
                                                <div class="p-3 d-flex justify-content-between border-top">
                                                    <div class="d-flex flex-column gap-3">
                                                        <div>Return ({flight.departureAirport.iata} - {flight.arrivalAirport.iata})</div>
                                                        <div>Dewasa 1x</div>
                                                        <div>Additional Cost</div>
                                                    </div>
                                                    <div class="d-flex flex-column gap-3 text-end">
                                                        <div>Rp {returnFlight.price + returnBaggage}</div>
                                                        <div>Rp {returnFlight.price}</div>
                                                        <div>Rp {returnBaggage}</div>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between border-top mx-3 py-3 px-0">
                                                    <div>Total Price</div>
                                                    <div class="text-primary">Rp {flight.price + departureBaggage + returnFlight.price + returnBaggage}</div>
                                                </div>
                                            </> :
                                            <>
                                                <div class="p-3 d-flex justify-content-between">
                                                    <div class="d-flex flex-column gap-3">
                                                        <div>Departure ({flight.departureAirport.iata} - {flight.arrivalAirport.iata})</div>
                                                        <div>Dewasa 1x</div>
                                                        <div>Additional Cost</div>
                                                    </div>
                                                    <div class="d-flex flex-column gap-3 text-end">
                                                        <div>Rp {flight.price + departureBaggage}</div>
                                                        <div>Rp {flight.price}</div>
                                                        <div>Rp {departureBaggage}</div>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between border-top mx-3 py-3 px-0">
                                                    <div>Total Price</div>
                                                    <div class="text-primary">Rp {flight.price + departureBaggage}</div>
                                                </div>
                                            </>}
                                    </div>
                                </div>
                            </div>
                            <div class="text-center button-price__continue mt-4 mb-5">
                                {/* <Link to={'/search/flight/payment'}> */}
                                <div class="d-flex border-1 rounded text-white justify-content-center border-0 price-button py-2 shadow" onClick={() => bookingHandler()}>
                                    Booking
                                </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>

                    {/* return flight */}
                    {roundTrip &&
                        <div class="order_flight">
                            <h1>Return flight</h1>
                            <div class="selected-flight">
                                {/* <!-- flight header --> */}
                                <div class="selected-flight-header card p-3 rounded-0 rounded-top">
                                    <div className='d-flex justify-content-between'>
                                        <div class="order_flight__header">
                                            <div><img src={Plane45} alt="" /></div>
                                            <div>{returnFlight.departureAirport.city}</div>
                                            <div><img src={LongAAR} alt="" /></div>
                                            <div>{returnFlight.arrivalAirport.city}</div>
                                        </div>
                                    </div>

                                    <div class="order_flight__body">
                                        <div class="order_flight__body-main">
                                            <div class="order_flight__body-main-name">
                                                <div class="plan-logo"><img src={returnFlight.Airline.image} alt="" width={70} /></div>
                                                <div class="name">
                                                    <div>
                                                        <div>{returnFlight.Airline.name}</div>
                                                        <div>{returnFlight.FlightClass.name}</div>
                                                    </div>
                                                    <div class="mobile-timeline">
                                                        <div>{moment(returnFlight.departureDate).format('llll').slice(0, -15)}</div>
                                                        <div>Direct - {returnFlight.duration.slice(1, 2)}h, {flight.duration.slice(3, 5)}m
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="desktop-timeline">
                                                <div><img src={LineVertical} alt="" /></div>
                                                <div>{moment(returnFlight.arrivalDate).format('llll').slice(0, -15)}</div>
                                                <div><img src={LineVertical} alt="" /></div>
                                                <div>Direct - {returnFlight.duration.slice(1, 2)}h, {flight.duration.slice(3, 5)}m</div>
                                            </div>
                                        </div>

                                        <div>
                                            {/* <img src={ArrowBottom} alt="" /> */}
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- flight detail --> */}
                                <div class="flight-detail search-detail return-flight card rounded-0 rounded-bottom border-top-0">
                                    <div class="search-detail__time s-detail">
                                        <div class="search-detail__time_departure">{returnFlight.departureTime.slice(0, -3)} - {moment(returnFlight.departureDate).format('llll').slice(0, -15)}</div>
                                        <div class="search-detail__time_estimation">
                                            <div><img src={Clock} alt="" /></div>
                                            <div>{returnFlight.duration.slice(1, 2)}h, {flight.duration.slice(3, 5)}m</div>
                                        </div>
                                        <div class="search-detail__time_arrival">{returnFlight.arrivalTime.slice(0, -3)} - {moment(returnFlight.arrivalDate).format('llll').slice(0, -15)}</div>
                                    </div>
                                    <div class="s-detail search-detail__ring">
                                        <img src={FlightRing} alt="" />
                                    </div>
                                    <div class="s-detail search-detail__destination">
                                        <div>
                                            <div>{returnFlight.departureAirport.city} ({returnFlight.departureAirport.iata})</div>
                                            <div>{returnFlight.departureAirport.name}</div>
                                        </div>
                                        <div>
                                            <div>{returnFlight.arrivalAirport.city} ({returnFlight.arrivalAirport.iata})</div>
                                            <div>{returnFlight.arrivalAirport.name}</div>
                                        </div>
                                    </div>
                                    <div class="search-detail__attr">
                                        <div class="search-detail__attr-item card">
                                            <div class="attr_name">
                                                <div><img src={returnFlight.Airline.image} alt="" width={60} /></div>
                                                <div>
                                                    <div>{returnFlight.Airline.name}</div>
                                                    <div>{returnFlight.flightCode} - {returnFlight.FlightClass.name}</div>
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
                            </div>
                        </div>}

                    {/* <!-- Contact detail --> */}
                    <div class="contact-detail">
                        <h1>Contact details</h1>
                        <div class="card p-3 contact-detail-item">
                            <div class="input-left">
                                <div class="mb-3">
                                    <label for="contactFirstName" class="form-label">First Name</label>
                                    <input type="text" name='contactFirstName' class="form-control" id="contactFirstName" placeholder="ex: John" onChange={(event) => bookingValueHandler(event)} required />
                                </div>
                                <div class="mb-3">
                                    <label for="contactTitle" class="form-label">Title</label>
                                    <select class="form-select contact-title" aria-label="Default select example" name='contactTitle' onChange={(event) => bookingValueHandler(event)} required>
                                        <option selected>Select title</option>
                                        <option value="mr">Tn</option>
                                        <option value="mr">Mr</option>
                                        <option value="ms">Ms</option>
                                        <option value="mrs">Mrs</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="contactPhone" class="form-label">No. Handphone</label>
                                    <input type="text" class="form-control" id="contactPhone" name="contactPhone" placeholder="0821xxxxxxxx" onChange={(event) => bookingValueHandler(event)} required />
                                </div>
                                <div class="mb-3">
                                    <label for="identityNumber" class="form-label">Identity Number</label>
                                    <input type="text" class="form-control" id="identityNumber" name="identityNumber" placeholder="521xxxxxxxx" onChange={(event) => bookingValueHandler(event)} required />
                                </div>
                            </div>
                            <div class="input-right">
                                <div class="mb-3">
                                    <label for="contactLastName" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" name="contactLastName" id="contactLastName" placeholder="ex: Doe" onChange={(event) => bookingValueHandler(event)} required />
                                </div>
                                <div class="mb-3">
                                    <label for="contactEmail" class="form-label">Email</label>
                                    <input type="email" class="form-control" name='contactEmail' id="contactEmail" placeholder="name@example.com" onChange={(event) => bookingValueHandler(event)} required />
                                </div>
                                <div class="mb-3">
                                    <label for="identityType" class="form-label">Identity Type</label>
                                    <select class="form-select contact-title" aria-label="Default select example" name='identityType' onChange={(event) => bookingValueHandler(event)} required>
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
                                <select class="form-select" aria-label="Default select example" name='departureBaggage' onChange={(event) => bookingValueHandler(event)} required>
                                    <option selected>Open this select menu</option>
                                    <option value="0">20 kg - free</option>
                                    <option value="25">5 + 20 kg - Rp. {flight.price * 0.1}</option>
                                    <option value="30">10 + 20 kg - Rp. {flight.price * 0.15}</option>
                                </select>
                            </div>
                        </div>
                        {roundTrip &&
                            <div class="card p-3 rounded-0 gap-3 rounded-0 border-top-0">
                                <div class="d-flex justify-content-between">
                                    <div>{returnFlight.departureAirport.city} ({returnFlight.departureAirport.iata}) - {returnFlight.arrivalAirport.city} ({returnFlight.arrivalAirport.iata})</div>
                                    <div>{returnFlight.flightCode}</div>
                                </div>

                                <div class="d-flex flex-column gap-1 add-ons__input">
                                    <div>Baggage</div>
                                    <select class="form-select" aria-label="Default select example" name='returnBaggage' onChange={(event) => bookingValueHandler(event)} required>
                                        <option selected>Open this select menu</option>
                                        <option value="0">20 kg - free</option>
                                        <option value="25">5 + 20 kg - Rp. {flight.price * 0.1}</option>
                                        <option value="30">10 + 20 kg - Rp. {flight.price * 0.15}</option>
                                    </select>
                                </div>
                            </div>}
                    </div>

                    {/* <!-- payment --> */}

                </>
            )}
        </div>
    )
}

export default FlightDetail;