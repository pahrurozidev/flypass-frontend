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
            airports: []
        }
    }

    componentDidMount() {
        API.airports().then((airports) => {
            // console.log(airports.length);
            this.setState({
                airports: airports
            })
        });
    }

    onSubmitSearchHandler = (event) => {
        event.preventDefault();

        API.flights().then((flights) => {
            this.props.submitSearchFlightDispatch(flights);
        })
    }

    render() {
        // console.log(this.state.airports);
        return (
            <form
                action=""
                className='booking-form'
                id='booking'
                onSubmit={(event) => this.onSubmitSearchHandler(event)}>
                <ul>
                    {/* <!-- departure --> */}
                    <li>
                        <label htmlFor="departure">From</label>
                        <input type="text" name="departure" id="departure" onChange={(event) => this.props.inputSearchFlightDispatch(event)} placeholder="Departure" />
                        {/* <select name="departure" id="departure" onChange={(event) => this.props.inputSearchFlightDispatch(event)}>
                            <option value="Soekarno-Hatta International Airport">Departure</option>
                            {this.state.airports.map((airports) => (
                                    <option value={airports.name}>{airports.name}</option>
                                ))}
                        </select> */}
                    </li>
                    <li className='change-icon mx-lg-2'>
                        <div>
                            <img src={Change} alt="" className='shadow rounded-circle' />
                        </div>
                    </li>
                    {/* <!-- destination --> */}
                    <li>
                        <label htmlFor="destionation">To</label>
                        <input type="text" name="destination" id="destination" onChange={(event) => this.props.inputSearchFlightDispatch(event)} placeholder="Arrival" />
                        {/* <select name="destination" id="destination" onChange={(event) => this.props.inputSearchFlightDispatch(event)} >
                            <option value="Ngurah Rai (Bali) International Airport">Destionation</option>
                            {
                                this.state.airports.map((airports) => (
                                    <option value={airports.name}>{airports.name}</option>
                                ))
                            }
                        </select> */}
                    </li>
                    <li>
                        <div className="d-flex trip-date">
                            {/* <!-- trip --> */}
                            <div className="d-flex flex-column col">
                                <label htmlFor="trip">Trip</label>
                                <select name="trip" id="trip" className="trip" onChange={(event) => this.props.inputSearchFlightDispatch(event)}>
                                    <option value="">Trip</option>
                                    <option value="Domestic">One Way</option>
                                    <option value="International">Round Trip</option>
                                </select>
                            </div>
                            {/* <!-- Date --> */}
                            <div className="d-flex flex-column col">
                                <label htmlFor="date">Date</label>
                                <input type="date" id="date" name="date" className="date" onChange={(event) => this.props.inputSearchFlightDispatch(event)} />
                            </div>
                        </div>
                    </li>
                    {/* <!-- Passenger --> */}
                    <li>
                        <label htmlFor="passenger">Passenger / Class</label>
                        <select name="passenger" id="passenger" onChange={(event) => this.props.inputSearchFlightDispatch(event)}>
                            <option value="">Passenger</option>
                            <option value="Economy">Economy</option>
                            <option value="Business">Business</option>
                        </select>
                    </li>
                </ul>
                <ul className="button">
                    <li>
                        <button type='button' className="button_reset">Reset</button>
                    </li>
                    <li>
                        <button
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
