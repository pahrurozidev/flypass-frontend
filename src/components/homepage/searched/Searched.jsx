import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/search.css';
import Garuda from '../../../assets/homepage/garuda.svg'
import Clock from '../../../assets/homepage/clock.png'
import FlightRing from '../../../assets/homepage/flight-ring.png'
import Bagasi from '../../../assets/homepage/bagasi.png'
import Food from '../../../assets/homepage/food.png'
import Entertain from '../../../assets/homepage/entertain.png'
import Warning from '../../../assets/homepage/warning.png'
import { connect } from 'react-redux';
import { API } from '../../../services';
import { actionType } from '../../../redux/reducer/globalActionType';
import moment from 'moment';
import { ArrowSwapHorizontal } from 'iconsax-react';

class Searched extends Component {

    constructor(props) {
        super(props);

        this.state = {
            flights: [],
            flight: {
                departureId: this.props.departureFlightId,
                returnId: this.props.returnFlightId,
            },
        }
    }

    componentDidMount() {
        API.flights().then((flight) => {
            this.setState({
                flights: flight,
            })
        });
    }

    selectDepartureFlightHandler = (id, flights) => {
        this.props.onSelectDepartureFlight(id, flights);
    }

    selectReturnFlightHandler = (id) => {
        this.props.onSelectReturnFlight(id);
    }

    render() {
        return (
            <section class="container m-auto card pt-3 pb-3 flight-result searched">
                <div className='card p-3 pb-md-0 select-flight d-flex flex-row'>
                    {this.props.departureFlight ?
                        <div className='d-flex flex-column flex-md-row justify-content-between col-12'>
                            <div className='select-flight-detail d-flex justify-content-between col-12 col-md-6 pb-3'>
                                <div className='select-flight-detail-departure'>
                                    <div className='d-flex flex-column'>
                                        <div className='fw-bold'>{this.props.departureFlights[0].departureAirport.iata} - {this.props.departureFlights[0].arrivalAirport.iata}</div>
                                        <div className='mt-1'>{moment(this.props.departureFlights[0].departureDate).format('llll').slice(0, -15)}</div>
                                    </div>
                                    <div className='price-return-flight'>Rp {this.props.departureFlights[0].price}</div>
                                </div>

                                <div className='select-flight-detail-btn'><ArrowSwapHorizontal size={30} className="mt-4" /></div>

                                {this.props.returnFlight ?
                                    <div className='select-flight-detail-return text-end'>
                                        <div className='d-flex flex-column'>
                                            <div className='fw-bold'>{this.props.returnFlights[0].departureAirport.iata} - {this.props.returnFlights[0].arrivalAirport.iata}</div>
                                            <div className='mt-1'>{moment(this.props.returnFlights[0].departureDate).format('llll').slice(0, -15)}</div>
                                        </div>
                                        <div className='price-return-flight'>Rp {this.props.returnFlights[0].price}</div>
                                    </div> :
                                    <div className='text-end select-flight-detail-return'>
                                        <h6 className='fw-bold'>Select Return Flight</h6>
                                        <div className='mt-2'>
                                            <div>{this.props.flights[0].departureAirport.iata} - {this.props.flights[0].arrivalAirport.iata}</div>
                                            <div>{moment(this.props.flight.returnDate).format('llll').slice(0, -15)}</div>
                                        </div>
                                    </div>
                                }
                            </div>

                            {this.props.returnFlight &&
                                <div className='btn btn-primary d-flex text-center items-center justify-content-center shadow btn-booking mt-3 mt-md-0'>
                                    <Link to={`/search/flight/${this.props.departureFlightId}&${this.props.returnFlightId}`} className="text-decoration-none text-white">Continue Booking</Link>
                                </div>}
                        </div> :
                        <div>
                            <h6 className='fw-bold'>Select Departure Flight</h6>
                            <p>{this.props.flights[0].departureAirport.iata} - {this.props.flights[0].arrivalAirport.iata} | {moment(this.props.flight.departureDate).format('llll').slice(0, -15)}</p>
                        </div>}
                </div>
                {this.props.returnFlight === false &&
                    <>
                        <div className="search_result-header card p-3 pb-md-0 mt-3">
                            {this.props.departureFlight ?
                                <>
                                    <h1>Return Flight to {this.props.flights[0].arrivalAirport.city}</h1>
                                    <p className="col-12 col-md-10 col-lg-8 text-select">{moment(this.props.flight.returnDate).format('LLLL').slice(0, -8)}</p>
                                </>
                                :
                                <>
                                    <h1>Departure Flight to {this.props.flights[0].arrivalAirport.city}</h1>
                                    <p className="col-12 col-md-10 col-lg-8 text-select">{moment(this.props.flight.departureDate).format('LLLL').slice(0, -8)}</p>
                                </>}
                        </div>

                        {this.props.flights.map((flight) => (
                            <div class="card search_result p-0">
                                <div class="flight-name bg">
                                    <div><img src={flight.Airline.image} alt="garuda logo" width={100} /></div>
                                    {/* <span>{flight.Airline.name}</span> */}
                                </div>
                                <div class="flight-duration-ring bg">
                                    <div class="cgk-time">
                                        {/* 20010704T120854 */}
                                        <div class="time">{flight.departureTime.slice(0, -3)}</div>
                                        <div class="cgk">{flight.departureAirport.iata}</div>
                                    </div>
                                    <div class="ring-time">
                                        {/* <div>Duration: {flight.duration}</div> */}
                                        <div>Duration: {this.props.flights[0].duration.slice(1, 2)}h, {this.props.flights[0].duration.slice(3, 5)}m</div>
                                        <div class="ring"></div>
                                        <div>Direct</div>
                                    </div>
                                    <div class="sn-time">
                                        {/* <div class="time">{flight.arrivalTime}</div> */}
                                        <div class="time">{flight.arrivalTime.slice(0, -3)}</div>
                                        <div class="sn">{flight.arrivalAirport.iata}</div>
                                    </div>
                                </div>
                                <div class="bg flight-service">
                                    <div class="service-label">Service:</div>
                                    <div>Bagasi 30kg, Makan, Hiburan</div>
                                </div>
                                <div class="bg flight-price">
                                    <div class="price"><span class="value">Rp {flight.price}</span>/org</div>

                                    {this.props.flight.trip === 'International' && this.props.departureFlight === false &&
                                        <Link to={`/`}>
                                            <div className="pilih-btn shadow" onClick={() => this.selectDepartureFlightHandler(flight.id, this.state.flights)}>Pilih</div>
                                        </Link>}

                                    {this.props.flight.trip === 'International' && this.props.departureFlight &&
                                        <div className="pilih-btn shadow" onClick={() => this.selectReturnFlightHandler(flight.id)}>
                                            Pilih
                                        </div>
                                    }

                                    {this.props.flight.trip === 'Domestic' &&
                                        <Link to={`/search/flight/${flight.id}`}>
                                            <div className="pilih-btn shadow">Pilih</div>
                                        </Link>}

                                </div>
                                {/* <div class="bg flight-detail-refaund">
                            <div class="flight-detail__btn">Flight Details</div>
                            <div class="flight-refaund__btn">Refaund</div>
                        </div> */}
                            </div>
                        ))}
                    </>}

                {/* <div class="search_result__first m-auto">
                    <div class="card search_result p-0 rounded-0 rounded-top">
                        <div class="flight-name bg">
                            <div><img src={Garuda} alt="garuda logo" /></div>
                            <span>Garuda Indonesia</span>
                        </div>
                        <div class="flight-duration-ring bg">
                            <div class="cgk-time">
                                <div class="time">08:25</div>
                                <div class="cgk">CGK</div>
                            </div>
                            <div class="ring-time">
                                <div>Duration: 1h 45m</div>
                                <div class="ring"></div>
                                <div>Direct</div>
                            </div>
                            <div class="sn-time">
                                <div class="time">11:10</div>
                                <div class="sn">SN</div>
                            </div>
                        </div>
                        <div class="bg flight-service">
                            <div class="service-label">Service:</div>
                            <div>Bagasi 30kg, Makan, Hiburan</div>
                        </div>
                        <div class="bg flight-price">
                            <div class="price"><span class="value">Rp 8.016.500</span>/org</div>
                            <Link to={'/search/flight/detail'}>
                                <div className="pilih-btn shadow">Pilih</div>
                            </Link>
                        </div>
                        <div class="bg flight-detail-refaund">
                            <div class="flight-detail__btn">Flight Details</div>
                            <div class="flight-refaund__btn">Refaund</div>
                        </div>
                    </div>

                    <div class="search-detail card rounded-0 rounded-bottom border-top-0">
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
                                <div class="attr_service flight-detail-service">
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
                </div> */}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        flights: state.flights,
        flight: state.flight,
        departureFlight: state.departureFlight,
        returnFlight: state.returnFlight,
        departureFlights: state.departureFlights,
        returnFlights: state.returnFlights,
        departureFlightId: state.departureFlightId,
        returnFlightId: state.returnFlightId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectDepartureFlight: (id, flights) => dispatch({
            type: actionType.DEPARTURE_FLIGHT,
            id: id,
            flights: flights,
        }),
        onSelectReturnFlight: (id) => dispatch({
            type: actionType.RETURN_FLIGHT,
            id: id,
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searched);

