import React, { Component, Fragment } from "react";
import Flights from "../components/admin/flight/Flights";

// style dashboard
import '../styles/dashboard.css';
import '../styles/flight.css';

class Flight extends Component {
    render() {
        return (
            <Fragment>
                <Flights />
            </Fragment>
        )
    }
}

export default Flight;