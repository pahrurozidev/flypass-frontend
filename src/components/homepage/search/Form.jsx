import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Change from '../../../assets/homepage/change.png';
import { actionType } from '../../../redux/reducer/globalActionType';
import { API } from '../../../services';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            airports: [],
            showDeparture: false,
            showArrival: false,
        }
    }

    componentDidMount() {
        API.airports().then((airports) => {
            this.setState({
                airports: airports
            })
        });
    }

    onSubmitSearchHandler = (event) => {
        event.preventDefault();

        API.flights().then((flights) => {
            console.log(flights);
            this.props.submitSearchFlightDispatch(flights);
        })
    }

    getDepartureAirportHandler = (event, airport) => {
        this.props.changeDepartureDispatch(airport)
        this.setState({
            showDeparture: false,
            showArrival: false,
        })
    }

    getArrivalAirportHandler = (event, airport) => {
        this.props.changeArrivalDispatch(airport)
        this.setState({
            showDeparture: false,
            showArrival: false,
        })
    }

    showDepartureList = (event) => {
        event.stopPropagation();

        this.setState({
            showDeparture: true,
            showArrival: false,
        })
    }

    hideDepartureList = (event) => {
        event.stopPropagation();

        this.setState({
            showDeparture: false,
            showArrival: true
        })
    }

    hideAllList = () => {
        this.setState({
            showDeparture: false,
            showArrival: false,
        })
    }

    onChangeflightHandler = () => {
        this.props.onChangeflightDispatch()
    }

    resetInputHandler = () => {
        this.props.resetInputDispatch()

        this.setState({
            showDeparture: false,
            showArrival: false,
        })
    }

    onClickFormHandler = (event) => {
        
        this.setState({
            showDeparture: false,
            showArrival: false,
        })
    }

    render() {
        const departure = this.props.flight.departure.toLowerCase();
        const departureAirports = this.state.airports.filter((airports) => {
            return airports.name.toLowerCase().includes(departure)
        });

        const destination = this.props.flight.destination.toLowerCase();
        const arrivalAirports = this.state.airports.filter((airports) => {
            return airports.name.toLowerCase().includes(destination)
        });
        
        return (
            <form
                action=""
                className='booking-form'
                id='booking'
                onSubmit={(event) => this.onSubmitSearchHandler(event)}
                onClick={(event) => this.onClickFormHandler(event)}>
                <ul>
                    {/* <!-- departure --> */}
                    <li>
                        <label htmlFor="departure">From</label>
                        <input
                            type="text"
                            name="departure"
                            id="departure"
                            onChange={(event) => this.props.inputSearchFlightDispatch(event)}
                            onClick={(event) => this.showDepartureList(event)}
                            placeholder="Departure"
                            value={this.props.flight.departure}
                            required />
                        <div
                            className={`departure-search rounded shadow ${this.state.showDeparture ? 'd-block' : 'd-none'}`}>
                            <ul class="list-group gap-1">
                                {departureAirports.map((airports) => (
                                    <li
                                        class="list-group-item border py-3 rounded"
                                        onClick={(event) => this.getDepartureAirportHandler(event, airports.name)}>
                                        <h6>{airports.name}</h6>
                                        <div className='d-flex gap-1'>
                                            <div>{airports.city}</div>
                                            <div>-</div>
                                            <div>{airports.country}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    {/* change icon */}
                    <li className='change-icon mx-lg-2'>
                        <div onClick={() => this.onChangeflightHandler()} role='button'>
                            <img src={Change} alt="" className='shadow rounded-circle' />
                        </div>
                    </li>
                    {/* <!-- destination --> */}
                    <li>
                        <label htmlFor="destionation">To</label>
                        <input
                            type="text"
                            name="destination"
                            id="destination"
                            onChange={(event) => this.props.inputSearchFlightDispatch(event)}
                            onClick={(event) => this.hideDepartureList(event)}
                            value={this.props.flight.destination}
                            placeholder="Arrival"
                            required />
                        <div
                            className={`arrival-search ${this.state.showArrival ? 'd-block' : 'd-none'}`}>
                            <ul class="list-group gap-1">
                                {arrivalAirports.map((airports) => (
                                    <li
                                        class="list-group-item border py-3"
                                        onClick={(event) => this.getArrivalAirportHandler(event, airports.name)}>
                                        <h6>{airports.name}</h6>
                                        <div className='d-flex gap-1'>
                                            <div>{airports.city}</div>
                                            <div>-</div>
                                            <div>{airports.country}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    {/* <!-- trip --> */}
                    <li>
                        <label htmlFor="trip">Trip</label>
                        <select name="trip" id="trip" className="trip"
                            onChange={(event) => this.props.inputSearchFlightDispatch(event)}
                            onClick={() => this.hideAllList()}
                            required style={{ height: '45px' }}>

                            {this.props.flight.trip == '' || this.props.flight.trip == undefined ?
                                <>
                                    <option selected>Trip</option>
                                    <option value="Domestic">One Way</option>
                                    <option value="International">Round Trip</option>
                                </> :
                                <>
                                    {this.props.flight.trip == '' && <option selected>Trip</option>}
                                    <option value="Domestic">One Way</option>
                                    <option value="International">Round Trip</option>
                                </>
                            }
                        </select>
                    </li>
                    {/* <!-- Departure Date --> */}
                    <li>
                        <label htmlFor="departure-date">Departure Date</label>
                        <input
                            type="date"
                            id="departureDate"
                            name="departureDate"
                            className="date"
                            onChange={(event) => this.props.inputSearchFlightDispatch(event)}
                            onClick={() => this.hideAllList()}
                            value={this.props.flight.departureDate}
                            required />
                    </li>
                    {/* <!-- Return Date --> */}
                    {this.props.flight.trip === 'International' &&
                        <li>
                            <label htmlFor="return-date">Return Date</label>
                            <input type="date" id="returnDate" name="returnDate"
                                className="date" onChange={(event) => this.props.inputSearchFlightDispatch(event)}
                                onClick={() => this.hideAllList()}
                                value={this.props.flight.returnDate}
                                required />
                        </li>}
                    {/* <!-- Passenger --> */}
                    <li>
                        <label htmlFor="passenger">Passenger / Class</label>
                        <select name="passenger" id="passenger" onChange={(event) => this.props.inputSearchFlightDispatch(event)}
                            onClick={() => this.hideAllList()}
                            required style={{ height: '45px' }}>

                            {this.props.flight.passenger == '' || this.props.flight.passenger == undefined ?
                                <>
                                    <option selected>Passenger</option>
                                    <option value="Economy">Economy</option>
                                    <option value="Business">Business</option>
                                </> :
                                <>
                                    {this.props.flight.passenger == '' && <option selected>Passenger</option>}
                                    <option value="Economy">Economy</option>
                                    <option value="Business">Business</option>
                                </>}
                        </select>
                    </li>
                </ul>
                <ul className="button">
                    <li>
                        <button type='button' className="button_reset" onClick={() => this.resetInputHandler()}>Reset</button>
                    </li>
                    <li>
                        <button
                            onClick={() => this.hideAllList()}
                            type='submit' className="button_search">Fly Now</button>
                    </li>
                </ul>
            </form>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        flights: state.flights,
        flight: state.flight,
        searchBox: state.searchBox,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputSearchFlightDispatch: (event) => dispatch({
            type: actionType.INPUT_SEARCH_FLIGHT,
            event: event,
        }),
        submitSearchFlightDispatch: (flights) => dispatch({
            type: actionType.SUBMIT_SEARCH_FLIGHT,
            flights: flights,
        }),
        changeDepartureDispatch: (airport) => dispatch({
            type: actionType.CHANGE_DEPARTURE,
            airport: airport,
        }),
        changeArrivalDispatch: (airport) => dispatch({
            type: actionType.CHANGE_ARRIVAL,
            airport: airport,
        }),
        resetInputDispatch: () => dispatch({
            type: actionType.RESET_INPUT,
        }),
        onChangeflightDispatch: () => dispatch({
            type: actionType.CHANGE_FLIGHT
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
