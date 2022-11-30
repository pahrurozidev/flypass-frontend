import React, { Component, Fragment } from "react";
import Customers from "../components/admin/customers/Customers";

// style dashboard
import '../styles/dashboard.css';
import '../styles/customers.css';

class Customer extends Component {
    render() {
        return (
            <Fragment>
                <Customers />
            </Fragment>
        )
    }
}

export default Customer;